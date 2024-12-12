# Job Offer Schema Project

![Schema Version](https://img.shields.io/badge/schema%20version-1.0.0-brightgreen)
![Downloads](https://img.shields.io/npm/dt/your-package-name)
![GitHub Releases](https://img.shields.io/github/downloads/your-username/your-repo-name/total)

Welcome to the Job Offer Schema Project! This project aims to provide the best and most comprehensive schema for detailing job offers in a digital format. Our schema supports multiple languages, including French, English, and Spanish, ensuring accessibility and ease of use across different regions.

This project was created by Webmonster, a team of dedicated developers passionate about creating innovative and accessible web solutions. Visit [Webmonster's website](https://webmonster.tech) to learn more about our projects and services.

## Project Structure

The project is organized into several directories to maintain clarity and organization:

- **[examples](examples)**: Contains sample job offer data in French (fr), English (en), and Spanish (es).
- **[schema](schema)**: Holds the JSON validation schemas for job offers in French (fr), English (en), and Spanish (es).
- **[test](test)**: Includes the test scripts to validate the job offer data against the schemas.
- **[scripts](scripts)**: Contains a Python script to test the validity of a dataset using the validation schemas.

## Features

- **Multi-language support**: The schema is available in French, English, and Spanish.
- **Comprehensive structure**: The schema covers all necessary fields for a detailed job offer.
- **Accessibility**: Designed to be used universally, making job offers accessible to everyone.
- **Standardization**: Aims to be the standard format for creating a universal employment platform.

## Usage

### Testing with Mocha (JavaScript)

1. Install the required libraries:
    ```sh
    npm install mocha chai ajv
    ```

2. Run the tests using Mocha:
    ```sh
    mocha test/test.js
    ```

### Validating with Python

1. Ensure you have `jsonschema` installed:
    ```sh
    pip install jsonschema
    ```

2. Use the provided Python script to validate a dataset:
    ```sh
    python scripts/validate.py dataset.json schema/en/job_offer_schema.json
    ```

## Examples

You can find example job offers in the `examples` directory for each supported language.

### French Example (fr)

```json
{
  "title": "Développeur Full Stack",
  "description": "Nous recherchons un développeur full stack talentueux pour rejoindre notre équipe dynamique...",
  "identifier": {
    "name": "Tech Solutions Inc.",
    "value": "TSI-DEV-001",
    "siret": "12345678901234",
    "nafCode": "6201Z"
  },
  ...
}
```


### English Example (en)

```json
{
  "title": "Full Stack Developer",
  "description": "We are looking for a talented full stack developer to join our dynamic team...",
  "identifier": {
    "name": "Tech Solutions Inc.",
    "value": "TSI-DEV-001",
    "siret": "12345678901234",
    "nafCode": "6201Z"
  },
  ...
}
```

### Spanish Example (en)

```json
{
   "title": "Desarrollador Full Stack",
   "description": "Estamos buscando un desarrollador full stack talentoso para unirse a nuestro equipo dinámico...",
   "identifier": {
      "name": "Tech Solutions Inc.",
      "value": "TSI-DEV-001",
      "siret": "12345678901234",
      "nafCode": "6201Z"
   },
   ...
}
```

## Contribution
We welcome contributions! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
