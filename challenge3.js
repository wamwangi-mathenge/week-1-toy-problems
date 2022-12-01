// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

const netSalary = (basic, benefits, nssf, nhif, paye) => {
    const taxablePay = basic + benefits;
    const paye = (taxablePay) => {
        // PAYE rates with effect from 1 January 2021:
        if (taxablePay > 32333) {
            return paye = (taxablePay * 0.3)
        } else if (taxablePay > 24000) {
            return paye = (taxablePay * 0.25)
        } else if (taxablePay <= 24000) {
            return paye = (taxablePay * 0.1)
        }
    }

    const nhif = (taxablePay) => {
        // NHIF rates in effect from 1 April 2015:
        if (taxablePay > 99999) {
            return nhif = 1700;
        } else if (taxablePay > 89999) {
            return nhif = 1600;
        } else if (taxablePay > 79999) {
            return nhif = 1500;
        } else if (taxablePay > 69999) {
            return nhif = 1400;
        } else if (taxablePay > 59999) {
            return nhif = 1300;
        } else if (taxablePay > 49999) {
            return nhif = 1200;
        } else if (taxablePay > 44999) {
            return nhif = 1100;
        } else if (taxablePay > 39999) {
            return nhif = 1000;
        } else if (taxablePay > 24999) {
            return nhif = 900;
        } else if (taxablePay > 19999) {
            return nhif = 750;
        } else if (taxablePay > 11999) {
            return nhif = 500;
        } else if (taxablePay > 7999) {
            return nhif = 400;
        } else if (taxablePay > 5999) {
            return nhif = 300;
        } else {
            return nhif = 150;
        }
    }

    const nssf = (taxablePay) => {
        // The employer and employee each contribute 6% of pensionable pay to NSSF
        return nssf = (taxablePay * 0.06)
    }

}

netSalary = taxablePay - (paye + nssf + nhif)