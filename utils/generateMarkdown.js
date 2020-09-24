function generateMarkDown(data)  {
  return `

# ${data.title}

## Description
${data.description}

## Table of Contents
* [Title](#title)
* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Installation](#installation-instructions)
* [Usage](#usage)
* [Contributing](#want-to-contribute?)
* [Testing](#Testing)
* [Questions/Contact Me](#questions/contact-me)
* [Licensing](#licensing)

### Installation Instructions
${data.installation}

### Usage
${data.usage}

### Want to Contribute? 
${data.contribution}

### Testing
${data.testing}

### Licensing

Licensing link here [${data.license}](https://choosealicense.com/licenses/${data.license}).

### Questions/Contact Me
View my GitHub portfolio [Here](https://github.com/${data.GitHub})

[Email Me!](mailto:${data.email})

Thank you! :cherry_blossom:
`;
}


module.exports = generateMarkDown