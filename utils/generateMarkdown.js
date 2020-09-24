function generateMarkDown(data)  {
  return `

# ${data.title}

## Description
${data.description}

### Installation Instructions
${data.installation}

### Usage
${data.usage}
`;
}


module.exports = generateMarkDown