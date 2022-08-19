export class SearchCriteria {
        private fullName?: String;
        private jobTitle?: String;
        private email?: String;
        private employeeNumber?: String;
    
        public constructor(fullName?: String, jobTitle?: String, email?: String, employeeNumber?: String){
            this.fullName = fullName;
            this.jobTitle = jobTitle;
            this.email = email;
            this.employeeNumber = employeeNumber;
        }
}
