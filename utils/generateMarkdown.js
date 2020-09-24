function generateMarkDown(data)  {
  return `

# ${data.title}

## Description
${data.description}

### Installation Instructions
${data.installation}

### Usage
${data.usage}

### Want to Contribute? :squirrel:
${data.contribution}

### Testing
${data.testing}

### Licensing
${data.license}
`;
}


module.exports = generateMarkDown