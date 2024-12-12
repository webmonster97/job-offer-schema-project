//npm install mocha chai ajv
const Ajv = require("ajv");
const ajv = new Ajv();
const chai = require("chai");
const expect = chai.expect;

// Your JSON schema
const jobOfferSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Job Offer",
    "type": "object",
    "properties": {
        "title": {
            "type": "string",
            "description": "The job title."
        },
        "description": {
            "type": "string",
            "description": "A detailed description of the job responsibilities and requirements."
        },
        "identifier": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The name of the company offering the job."
                },
                "value": {
                    "type": "string",
                    "description": "A unique identifier for the job offer."
                },
                "siret": {
                    "type": "string",
                    "description": "The company's SIRET number."
                },
                "nafCode": {
                    "type": "string",
                    "description": "The NAF code of the company's main activity."
                }
            },
            "required": ["name", "value", "siret", "nafCode"]
        },
        "datePosted": {
            "type": "string",
            "format": "date-time",
            "description": "The date and time when the job offer was posted."
        },
        "validThrough": {
            "type": "string",
            "format": "date-time",
            "description": "The date and time until the job offer is valid."
        },
        "url": {
            "type": "string",
            "format": "uri",
            "description": "The URL of the job posting."
        },
        "applyUrl": {
            "type": "string",
            "format": "uri",
            "description": "The URL to apply for the job."
        },
        "employmentType": {
            "type": "string",
            "enum": ["FullTime", "PartTime", "Contract", "Temporary", "Internship", "Other"],
            "description": "The type of employment offered."
        },
        "employmentLevel": {
            "type": "string",
            "enum": ["none", "senior", "mid", "junior"],
            "description": "The employment level."
        },
        "hiringOrganization": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The name of the hiring organization."
                },
                "sameAs": {
                    "type": "string",
                    "format": "uri",
                    "description": "The URL of the organization's website."
                },
                "logo": {
                    "type": "string",
                    "format": "uri",
                    "description": "The URL of the organization's logo."
                }
            },
            "required": ["name"]
        },
        "recruiter": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "description": "The name of the recruiter."
                },
                "email": {
                    "type": "string",
                    "format": "email",
                    "description": "The recruiter's email."
                },
                "phone": {
                    "type": "string",
                    "description": "The recruiter's phone number."
                }
            },
            "required": ["name", "email"]
        },
        "jobLocation": {
            "type": "object",
            "properties": {
                "streetAddress": {
                    "type": "string",
                    "description": "The street address of the job location."
                },
                "addressLocality": {
                    "type": "string",
                    "description": "The locality of the address."
                },
                "addressRegion": {
                    "type": "string",
                    "description": "The region of the address."
                },
                "postalCode": {
                    "type": "string",
                    "description": "The postal code of the address."
                },
                "addressCountry": {
                    "type": "string",
                    "description": "The country of the address."
                },
                "isoCountry": {
                    "type": "string",
                    "description": "The ISO2 code of the country."
                }
            },
            "required": ["streetAddress", "addressLocality", "addressRegion", "postalCode", "addressCountry", "isoCountry"]
        },
        "remoteStatus": {
            "type": "string",
            "enum": ["none", "temporary", "hybrid", "fully"],
            "description": "The remote work status of the job."
        },
        "baseSalary": {
            "type": "object",
            "properties": {
                "currency": {
                    "type": "string",
                    "description": "The currency of the salary, e.g., USD, EUR."
                },
                "value": {
                    "type": "number",
                    "description": "The amount of the salary."
                },
                "unitText": {
                    "type": "string",
                    "enum": ["Hour", "Day", "Week", "Month", "Year"],
                    "description": "The frequency of salary payment."
                }
            },
            "required": ["currency", "value", "unitText"]
        },
        "qualifications": {
            "type": "string",
            "description": "The qualifications required for the job."
        },
        "responsibilities": {
            "type": "string",
            "description": "The responsibilities associated with the job."
        },
        "skills": {
            "type": "string",
            "description": "The skills required for the job."
        },
        "incentiveCompensation": {
            "type": "string",
            "description": "Information about additional compensation, such as bonuses."
        },
        "industry": {
            "type": "string",
            "description": "The industry of the job."
        },
        "workHours": {
            "type": "string",
            "description": "The work hours of the job."
        },
        "jobBenefits": {
            "type": "array",
            "items": {
                "type": "string"
            },
            "description": "The benefits offered by the employer."
        },
        "applicationInstructions": {
            "type": "string",
            "description": "Instructions to apply for the job."
        },
        "nonDiscriminationPolicy": {
            "type": "string",
            "description": "The employer's non-discrimination policy."
        },
        "dataProtectionPolicy": {
            "type": "string",
            "description": "Information about the data protection policy for applicants."
        }
    },
    "required": [
        "title",
        "description",
        "identifier",
        "datePosted",
        "validThrough",
        "applyUrl",
        "employmentType",
        "employmentLevel",
        "hiringOrganization",
        "recruiter",
        "jobLocation",
        "remoteStatus",
        "baseSalary",
        "nonDiscriminationPolicy",
        "dataProtectionPolicy"
    ]
};

// Example of a valid job offer data
const validJobOffer = {
    "title": "Full Stack Developer",
    "description": "We are looking for a talented full stack developer to join our dynamic team. The ideal candidate will have a strong background in web development and a passion for creating innovative applications.",
    "identifier": {
        "name": "Tech Solutions Inc.",
        "value": "TSI-DEV-001",
        "siret": "12345678901234",
        "nafCode": "6201Z"
    },
    "datePosted": "2024-07-12T10:00:00Z",
    "validThrough": "2024-08-12T23:59:59Z",
    "url": "https://techsolutions.com/jobs/full-stack-developer",
    "applyUrl": "https://techsolutions.com/jobs/full-stack-developer/apply",
    "employmentType": "FullTime",
    "employmentLevel": "mid",
    "hiringOrganization": {
        "name": "Tech Solutions Inc.",
        "sameAs": "https://techsolutions.com",
        "logo": "https://techsolutions.com/logo.png"
    },
    "recruiter": {
        "name": "Marie Dupont",
        "email": "marie.dupont@techsolutions.com",
        "phone": "0123456789"
    },
    "jobLocation": {
        "streetAddress": "10 Peace Street",
        "addressLocality": "London",
        "addressRegion": "England",
        "postalCode": "EC1A 1AA",
        "addressCountry": "England",
        "isoCountry": "GB"
    },
    "remoteStatus": "hybrid",
    "baseSalary": {
        "currency": "GBP",
        "value": 45000,
        "unitText": "Year"
    },
    "qualifications": "Degree in computer science or related field. Minimum 3 years of experience in web development.",
    "responsibilities": "Develop and maintain web applications. Collaborate with design and product teams.",
    "skills": "JavaScript, React, Node.js, HTML, CSS",
    "incentiveCompensation": "Annual performance-based bonus.",
    "industry": "Information Technology",
    "workHours": "35 hours per week",
    "jobBenefits": ["Health insurance", "Meal vouchers", "Flexible remote work"],
    "applicationInstructions": "Please apply online by submitting your resume and a cover letter.",
    "nonDiscriminationPolicy": "We are an equal opportunity employer and do not discriminate.",
    "dataProtectionPolicy": "Your personal data will be processed in accordance with our privacy policy available on our website."
};

// Example of an invalid job offer data (missing required fields)
const invalidJobOffer = {
    "title": "Full Stack Developer"
};

// Compile the schema
const validate = ajv.compile(jobOfferSchema);

// Define tests
describe("Job Offer Schema Validation", function () {
    it("should validate a correct job offer", function () {
        const valid = validate(validJobOffer);
        expect(valid).to.be.true;
        if (!valid) console.log(validate.errors);
    });

    it("should invalidate an incorrect job offer", function () {
        const valid = validate(invalidJobOffer);
        expect(valid).to.be.false;
        if (!valid) console.log(validate.errors);
    });
});

// Run the tests using Mocha
// mocha test.js
