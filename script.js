document.addEventListener("DOMContentLoaded", function () {
    class FormulaEvaluator {
        constructor() {
            this.formulas = document.querySelectorAll("formula");
            this.initialize();
        }

        initialize() {
            this.formulas.forEach(formula => {
                this.evaluateFormula(formula);
                this.attachEventListeners(formula);
            });
        }

        attachEventListeners(formula) {
            const variables = this.extractVariables(formula.getAttribute("evaluator"));
            variables.forEach(id => {
                const input = document.getElementById(id);
                if (input) {
                    input.addEventListener("input", () => this.evaluateFormula(formula));
                }
            });
        }

        extractVariables(expression) {
            return [...new Set(expression.match(/[a-zA-Z_][a-zA-Z0-9_]*/g))];
        }

        evaluateFormula(formula) {
            try {
                const expression = formula.getAttribute("evaluator");
                const variables = this.extractVariables(expression);
                let evaluatedExpression = expression;

                variables.forEach(id => {
                    const input = document.getElementById(id);
                    const value = input ? parseFloat(input.value) : NaN;
                    if (isNaN(value)) throw new Error("Invalid Format");
                    evaluatedExpression = evaluatedExpression.replace(new RegExp(`\\b${id}\\b`, "g"), value);
                });
                
                const result = Function(`return ${evaluatedExpression}`)();
                formula.textContent = isNaN(result) ? "Invalid Format" : result;
            } catch (e) {
                formula.textContent = "Invalid Format";
            }
        }
    }

    new FormulaEvaluator();
});