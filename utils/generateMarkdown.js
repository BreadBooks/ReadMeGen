function generateMarkDown(data)  {
  return `

# ${data.title}

## Description
${data.description}

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
View my GitHub portfolio [Here](github.com/${data.GitHub})
[Email Me!](mailto:${data.email})
Thank you! :cherry_blossom:
`;
}


module.exports = generateMarkDown