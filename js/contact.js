document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#lead-form");
  if (!form) return;

  const steps = Array.from(form.querySelectorAll(".form-step"));
  const nextButtons = form.querySelectorAll("[data-action='next']");
  const backButtons = form.querySelectorAll("[data-action='back']");
  const submitButton = form.querySelector("[data-action='submit']");
  const confirmation = document.querySelector("#lead-confirmation");
  const stepIndicator = document.querySelector("#step-indicator");
  const validationMessage = form.querySelector("#lead-form-error");
  const budgetOptions = form.querySelector("[data-budget-options]");
  const budgetInputs = Array.from(form.querySelectorAll("input[name='budget']"));
  const expectedPriceField = form.querySelector("[data-expected-price]");
  const expectedPriceInput = form.querySelector("#expected-price");
  const priceStepTitle = form.querySelector("[data-price-step-title]");

  let currentStep = 0;
  let activeStepIndices = steps.map((_, index) => index);
  form.noValidate = true;

  const intentParam = new URLSearchParams(window.location.search).get("intent");
  const intentValue = {
    buy: "Buy a Property",
    sell: "Sell a Property"
  }[intentParam?.toLowerCase()];
  const intentOption = Array.from(form.querySelectorAll("input[name='intent']"))
    .find((option) => option.value === intentValue);

  if (intentOption) intentOption.checked = true;

  const updatePriceStep = () => {
    const intent = form.querySelector("input[name='intent']:checked")?.value;
    const isSeller = intent === "Sell a Property";
    if (budgetOptions) budgetOptions.hidden = isSeller;
    budgetInputs.forEach((input) => {
      input.disabled = isSeller;
    });
    if (expectedPriceField) expectedPriceField.hidden = !isSeller;
    if (expectedPriceInput) {
      expectedPriceInput.disabled = !isSeller;
      expectedPriceInput.required = isSeller;
    }
    if (priceStepTitle) priceStepTitle.textContent = isSeller ? "Expected Sale Price" : "Budget";
  };

  const updateIntentFlow = () => {
    const intent = form.querySelector("input[name='intent']:checked")?.value;
    const isPrivateConsultation = intent === "Private Consultation";
    activeStepIndices = isPrivateConsultation
      ? [0, steps.length - 2, steps.length - 1]
      : steps.map((_, index) => index);
    const messageInput = form.querySelector("#message");
    if (messageInput) messageInput.required = isPrivateConsultation;
    updatePriceStep();
    if (!activeStepIndices.includes(currentStep)) currentStep = activeStepIndices[0];
  };

  updateIntentFlow();

  const getInvalidControl = (step) => step.querySelector(":invalid");

  const clearValidationMessage = () => {
    if (!validationMessage) return;
    validationMessage.textContent = "";
    validationMessage.hidden = true;
  };

  const validateStep = (step) => {
    const invalidControl = getInvalidControl(step);
    if (!invalidControl) {
      clearValidationMessage();
      return true;
    }

    if (validationMessage) {
      validationMessage.textContent = invalidControl.type === "radio"
        ? "Please choose an option to continue."
        : invalidControl.validationMessage;
      validationMessage.hidden = false;
    }

    const label = invalidControl.labels?.[0];
    if (label) {
      label.tabIndex = -1;
      label.focus();
    } else {
      invalidControl.focus();
    }
    return false;
  };

  const updateStep = () => {
    clearValidationMessage();
    steps.forEach((step, index) => {
      step.classList.toggle("active", index === currentStep);
    });

    if (stepIndicator) {
      const activePosition = activeStepIndices.indexOf(currentStep);
      stepIndicator.textContent = `Step ${activePosition + 1} of ${activeStepIndices.length}`;
    }

    const activePosition = activeStepIndices.indexOf(currentStep);
    const isFirstStep = activePosition === 0;
    const isLastStep = activePosition === activeStepIndices.length - 1;

    backButtons.forEach((button) => {
      button.style.visibility = isFirstStep ? "hidden" : "visible";
    });

    nextButtons.forEach((button) => {
      button.classList.toggle("hidden", isLastStep);
    });

    submitButton?.classList.toggle("hidden", !isLastStep);
  };

  form.querySelectorAll("input[name='intent']").forEach((input) => {
    input.addEventListener("change", () => {
      updateIntentFlow();
      updateStep();
    });
  });

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const activePosition = activeStepIndices.indexOf(currentStep);
      if (activePosition < activeStepIndices.length - 1 && validateStep(steps[currentStep])) {
        currentStep = activeStepIndices[activePosition + 1];
        updateStep();
      }
    });
  });

  backButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const activePosition = activeStepIndices.indexOf(currentStep);
      if (activePosition > 0) {
        currentStep = activeStepIndices[activePosition - 1];
        updateStep();
      }
    });
  });

  form.addEventListener("input", clearValidationMessage);
  form.addEventListener("change", clearValidationMessage);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const invalidStepIndex = activeStepIndices.find((stepIndex) => getInvalidControl(steps[stepIndex]));
    if (invalidStepIndex !== undefined) {
      currentStep = invalidStepIndex;
      updateStep();
      validateStep(steps[currentStep]);
      return;
    }

    form.classList.add("hidden");
    confirmation?.classList.add("is-visible");
  });

  updateStep();
});
