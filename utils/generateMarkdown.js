function generateMarkDown(data)  {
  return `

# ${data.title}

## Description
${data.description}
`;
}

module.exports = generateMarkDown