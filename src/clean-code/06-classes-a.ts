(() => {
    type Gender = 'M' | 'F';
    // class Person {
    //     public name: string;
    //     public gender: Gender;
    //     public birthDate: Date;

    //     constructor(name: string, gender: Gender, birthDate: Date) {
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthDate = birthDate;
    //     }
    // }

    // Forma mas reducida
    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthDate: Date
        ) { }
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(name, gender, birthDate)
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        ) {
            super(email, role, name, gender, birthDate);
        }
    }

    const userSettings = new UserSettings(
        'user/home',
        'home',
        'eugenio@gmail.com',
        'student',
        'Eugenio',
        'M',
        new Date('2001-5-24')
    )
    const newPerson = new Person('Eugenio', 'M', new Date('2001-5-24'))

    console.log({ newPerson });
    console.log({ userSettings });

})();

(() => {
    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor({ name, gender, birthDate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProps {
        name: string;
        gender: Gender;
        birthDate: Date;
        email: string;
        role: string;
    }

    class User extends Person {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ name, gender, birthDate, email, role }: UserProps) {
            super({ name, gender, birthDate })
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    interface UserSettingsProps {
        name: string;
        gender: Gender;
        birthDate: Date;
        email: string;
        role: string;
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ name, gender, birthDate, email, role, workingDirectory, lastOpenFolder }: UserSettingsProps) {
            super({ email, role, name, gender, birthDate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    // Ya no importa el orden de los argumentos, no son argumentos posicionales. Argumentos desectructurados.
    const userSettings = new UserSettings({
        workingDirectory: 'user/home',
        lastOpenFolder: 'home',
        email: 'eugenio@gmail.com',
        role: 'student',
        name: 'Eugenio',
        gender: 'M',
        birthDate: new Date('2001-5-24')
    })
    const newPerson = new Person({ name: 'Eugenio', gender: 'M', birthDate: new Date('2001-5-24') })

    console.log({ newPerson });
    console.log({ userSettings });

})();