function generateReadMe(data) {
    return `
        # ${data.title}

        # ${data.license}

        ### Description

        ${data.description}

        ### Table of Contents
        *Installation
        

        ## Installation
        To install run the following commands
        \`\`\
        ${data.installation}
        \`\`\

        ## Usage
        ${data.usage}

        ${data.license}

        ## Contributing
        ${data.contribution}

        ## Tests
        ${data.test}

        ## Questions
        ${data.eMail}

        ${data.github}


    `
}

module.exports = generateMarkdown;