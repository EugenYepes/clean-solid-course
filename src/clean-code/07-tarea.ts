(() => {

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

    interface HtmlElementProps {
        id: string;
        type: HtmlType;
    }

    class HtmlElement {
        public id: string;
        public type: HtmlType;

        constructor({ id, type }: HtmlElementProps) {
            this.id = id;
            this.type = type;
        }
    }

    interface InputAttributesProps {
        value: string,
        placeholder: string,
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;
        constructor({ value, placeholder }: InputAttributesProps) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        setFocus() { };
        getValue() { };
        isActive() { };
        removeValue() { };
    }

    interface InputElementProps {
        id: string;
        value: string;
        placeholder: string;
    }

    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor({ id, value, placeholder }: InputElementProps) {
            this.htmlElement = new HtmlElement({ id: id, type: 'input' });
            this.inputAttributes = new InputAttributes({ value: value, placeholder: placeholder });
            this.inputEvents = new InputEvents();
        }
    }

    const nameField = new InputElement({value: 'Fernando', placeholder: 'Enter first name', id: 'txtName'});

    console.log({ nameField });

})();