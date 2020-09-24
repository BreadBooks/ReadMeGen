function generateMarkDown(data)  {
  return `

# ${data.title}

## Description
${data.description}

### Installation Instructions
${data.installation}
`;
}


module.exports = generateMarkDown