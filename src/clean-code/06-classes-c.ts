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
        email: string;
        role: string;
    }

    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ email, role }: UserProps) {
            this.email = email;
            this.role = role;
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({ name, gender, birthDate, email, role, workingDirectory, lastOpenFolder }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthDate })
            this.user = new User({ email, role });
            this.settings = new Settings({ workingDirectory, lastOpenFolder })
        }
    }


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