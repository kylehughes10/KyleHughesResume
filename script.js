// Lines of Code & Actions
const codeSteps = [
  // Introduction
  { code: "// Welcome to my interactive resume!", action: () => {} },
  { code: "// I'll type this out live and build my resume step-by-step.", action: () => {} },
  { code: "// Watch the magic happen in real-time. Let's begin! 🚀", action: () => {} },

  // Step 1: Header
  { code: "// Step 1: Adding my name and contact details.", action: () => {} },
  { code: "const name = 'Kyle Hughes';", action: () => {} },
  { code: "const contact = 'kylehughes00@gmail.com | linkedin.com/in/kyleleehughes | kylehughesofficial.com';", action: () => {} },
  { 
    code: "document.getElementById('resume-output').innerHTML = `\n  <h1>${name}</h1>\n  <p>Email: <a href='mailto:kylehughes00@gmail.com'>kylehughes00@gmail.com</a></p>\n  <p>\n    <a href='https://linkedin.com/in/kyleleehughes' target='_blank'>linkedin.com/in/kyleleehughes</a> |\n    <a href='https://kylehughesofficial.com' target='_blank'>kylehughesofficial.com</a>\n  </p>`;",
    action: () => {
      document.getElementById('resume-output').innerHTML = `
        <h1>Kyle Hughes</h1>
        <p>Email: <a href="mailto:kylehughes00@gmail.com">kylehughes00@gmail.com</a></p>
        <p>
          <a href="https://linkedin.com/in/kyleleehughes" target="_blank">linkedin.com/in/kyleleehughes</a> |
          <a href="https://kylehughesofficial.com" target="_blank">kylehughesofficial.com</a>
        </p>`;
    }
  },

  // Step 2: Professional Overview
  { code: "// Step 2: Adding a professional overview.", action: () => {} },
  { 
    code: "const overview = `Experienced finance professional with a robust background in technology and finance. \nProven track record in leveraging programming skills to enhance financial operations and drive business growth.`;", 
    action: () => {}
  },
  { 
    code: "document.getElementById('resume-output').innerHTML += `\n  <h2>Professional Overview</h2>\n  <p>${overview}</p>`;",
    action: () => {
      document.getElementById('resume-output').innerHTML += `
        <h2>Professional Overview</h2>
        <p>Experienced finance professional with a robust background in technology and finance. 
        Proven track record in leveraging programming skills to enhance financial operations 
        and drive business growth.</p>`;
    }
  },

  // Step 3: Education
  { code: "// Step 3: Adding my education history.", action: () => {} },
  { 
    code: "const education = [\n  { school: 'Southern Methodist University – Southwest Graduate School of Banking', degree: 'Business Executive Leadership' },\n  { school: 'Southeastern Oklahoma State University', degree: 'Bachelor of Business Administration in Finance & Banking' }\n];", 
    action: () => {}
  },
  { 
    code: "education.forEach(edu => {\n  document.getElementById('resume-output').innerHTML += `\n    <h2>Education</h2>\n    <p><strong>${edu.school}</strong><br><em>${edu.degree}</em></p>`;\n});",
    action: () => {
      const eduData = [
        { school: 'Southern Methodist University – Southwest Graduate School of Banking', degree: 'Business Executive Leadership' },
        { school: 'Southeastern Oklahoma State University', degree: 'Bachelor of Business Administration in Finance & Banking' }
      ];
      document.getElementById('resume-output').innerHTML += `
        <h2>Education</h2>
        ${eduData.map(edu => `<p><strong>${edu.school}</strong><br><em>${edu.degree}</em></p>`).join('')}`;
    }
  },

  // Step 4: Work Experience
  { code: "// Step 4: Adding my professional experience.", action: () => {} },
  { 
    code: "const experience = [\n  { title: 'AVP, Senior Business Analyst', company: 'First United Bank and Trust', year: 'June 2022 – Present', responsibilities: [\n    'Developed and executed strategic initiatives to improve operational efficiency.',\n    'Led CRM and ERP implementations (Salesforce, nCino).',\n    'Integrated platforms: Azure Snowflake, Microsoft 365, Resolver, MuleSoft.',\n    'Supported leadership to achieve the bank’s $30 billion asset target.'\n  ]},\n  { title: 'Enterprise Risk Management Analyst', company: 'First United Bank and Trust', year: 'Aug 2020 – June 2022', responsibilities: [\n    'Enhanced the risk management framework to scale the bank’s growth from $8B to $12B.',\n    'Established the Operational Risk Management team.',\n    'Ensured FDIC and third-party audit compliance.'\n  ]},\n  { title: 'Financial Services Accountant & Analyst', company: 'First United Bank and Trust', year: 'June 2020 – Aug 2020', responsibilities: [\n    'Led financial integration during an insurance company acquisition.',\n    'Improved efficiency by transitioning vendor payments to ACH.',\n    'Redesigned mortgage workflows to improve productivity.'\n  ]},\n  { title: 'Relationship Banker', company: 'First United Bank and Trust', year: 'June 2018 – June 2020', responsibilities: [\n    'Delivered exceptional customer service and exceeded sales goals.',\n    'Managed consumer lending and implemented sales campaigns.'\n  ]}\n];",
    action: () => {}
  },
  { 
    code: "experience.forEach(exp => {\n  document.getElementById('resume-output').innerHTML += `\n    <h3>${exp.company}</h3>\n    <h4>${exp.title} (${exp.year})</h4>\n    <ul>${exp.responsibilities.map(task => `<li>${task}</li>`).join('')}</ul>`;\n});",
    action: () => {
      const expData = [
        { title: 'AVP, Senior Business Analyst', company: 'First United Bank and Trust', year: 'June 2022 – Present', responsibilities: [
          'Developed and executed strategic initiatives to improve operational efficiency.',
          'Led CRM and ERP implementations (Salesforce, nCino).',
          'Integrated platforms: Azure Snowflake, Microsoft 365, Resolver, MuleSoft.',
          'Supported leadership to achieve the bank’s $30 billion asset target.'
        ]},
        { title: 'Enterprise Risk Management Analyst', company: 'First United Bank and Trust', year: 'Aug 2020 – June 2022', responsibilities: [
          'Enhanced the risk management framework to scale the bank’s growth from $8B to $12B.',
          'Established the Operational Risk Management team.',
          'Ensured FDIC and third-party audit compliance.'
        ]},
        { title: 'Financial Services Accountant & Analyst', company: 'First United Bank and Trust', year: 'June 2020 – Aug 2020', responsibilities: [
          'Led financial integration during an insurance company acquisition.',
          'Improved efficiency by transitioning vendor payments to ACH.',
          'Redesigned mortgage workflows to improve productivity.'
        ]},
        { title: 'Relationship Banker', company: 'First United Bank and Trust', year: 'June 2018 – June 2020', responsibilities: [
          'Delivered exceptional customer service and exceeded sales goals.',
          'Managed consumer lending and implemented sales campaigns.'
        ]}
      ];
      document.getElementById('resume-output').innerHTML += `
        <h2>Professional Experience</h2>
        ${expData.map(exp => `
          <h3>${exp.company}</h3>
          <h4>${exp.title} (${exp.year})</h4>
          <ul>${exp.responsibilities.map(task => `<li>${task}</li>`).join('')}</ul>
        `).join('')}`;
    }
  },

  // Step 5: Skills
  { code: "// Step 5: Adding my skills and certifications.", action: () => {} },
  { code: "const skills = 'Python, JavaScript, Agile, Azure, SQL, Salesforce Development';", action: () => {} },
  { code: "const certifications = 'Certified Scrum Master (CSM), Mastering Design Thinking, CRC.';", action: () => {} },
  { 
    code: "document.getElementById('resume-output').innerHTML += `<h2>Skills</h2><p>${skills}</p><h2>Certifications</h2><p>${certifications}</p>`;",
    action: () => {
      document.getElementById('resume-output').innerHTML += `
        <h2>Skills</h2>
        <p>Python, JavaScript, Agile, Azure, SQL, Salesforce Development</p>
        <h2>Certifications</h2>
        <p>Certified Scrum Master (CSM), Mastering Design Thinking, Credit Risk Certification (CRC)</p>`;
    }
  }
];

// Typing Logic & Skip Button
let currentCode = '';
let stepIndex = 0;

function typeStep() {
  if (stepIndex < codeSteps.length) {
    const step = codeSteps[stepIndex];
    let charIndex = 0;

    function typeCharacter() {
      if (charIndex < step.code.length) {
        currentCode += step.code[charIndex];
        document.getElementById('code').textContent = currentCode;
        Prism.highlightAll();
        charIndex++;
        setTimeout(typeCharacter, 20);
      } else {
        step.action();
        currentCode += '\n\n';
        stepIndex++;
        setTimeout(typeStep, 500);
      }
    }
    typeCharacter();
  }
}

// Skip Button Logic
document.getElementById('skip-button').addEventListener('click', () => {
  stepIndex = codeSteps.length;
  currentCode = codeSteps.map(step => step.code).join('\n\n');
  document.getElementById('code').textContent = currentCode;
  Prism.highlightAll();
  codeSteps.forEach(step => step.action());
});

typeStep();
