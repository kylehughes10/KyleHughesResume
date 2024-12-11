// Lines of Code & Associated Actions
const codeSteps = [
    { 
      code: "// Welcome to my interactive resume!",
      action: () => {}
    },
    { 
      code: "// I’ll type this out live and build my resume step-by-step.",
      action: () => {}
    },
    { 
      code: "// Watch it come together as if I’m coding it in real time.",
      action: () => {}
    },
    { 
      code: "// Step 1: Let’s start with my name, contact details, and personal website.",
      action: () => {}
    },
    { 
      code: "let name = 'Kyle Hughes';",
      action: () => {}
    },
    { 
      code: "let contact = `(580) 775-1076 | kylehughes00@gmail.com | linkedin.com/in/kyleleehughes | kylehughesofficial.com`;",
      action: () => {}
    },
    { 
      code: "document.getElementById('resume-output').innerHTML = `<h1>${name}</h1><p>${contact}</p>`;",
      action: () => {
        document.getElementById('resume-output').innerHTML = `
          <h1>Kyle Hughes</h1>
          <p>
            (580) 775-1076 | 
            kylehughes00@gmail.com | 
            <a href="https://linkedin.com/in/kyleleehughes" target="_blank">linkedin.com/in/kyleleehughes</a> | 
            <a href="https://www.kylehughesofficial.com" target="_blank">kylehughesofficial.com</a>
          </p>`;
      }
    },
    { 
      code: "// Step 2: Adding a professional overview to introduce myself.",
      action: () => {}
    },
    { 
      code: "let overview = `Experienced finance professional with a robust background in technology and finance. Proven track record in leveraging programming skills to enhance financial operations and drive business growth. Adept at developing financial applications, managing large-scale projects, and deploying innovative solutions to optimize productivity and profitability. Eager to bring deep industry knowledge and technical expertise to a role in the banking sector.`;",
      action: () => {
        document.getElementById('resume-output').innerHTML += `
          <h2>PROFESSIONAL OVERVIEW</h2>
          <p>Experienced finance professional with a robust background in technology and finance. Proven track record in leveraging programming skills to enhance financial operations and drive business growth. Adept at developing financial applications, managing large-scale projects, and deploying innovative solutions to optimize productivity and profitability. Eager to bring deep industry knowledge and technical expertise to a role in the banking sector.</p>`;
      }
    },
    { 
      code: "// Step 3: Let’s add my education history.",
      action: () => {}
    },
    { 
      code: "let education = [\n  { school: 'Southern Methodist University – Southwest Graduate School of Banking', location: 'Dallas, TX', degree: 'Business Executive Leadership' },\n  { school: 'Southeastern Oklahoma State University', location: 'Durant, OK', degree: 'Bachelor of Business Administration in Finance and Banking' }\n];",
      action: () => {
        const education = [
          { school: 'Southern Methodist University – Southwest Graduate School of Banking', location: 'Dallas, TX', degree: 'Business Executive Leadership' },
          { school: 'Southeastern Oklahoma State University', location: 'Durant, OK', degree: 'Bachelor of Business Administration in Finance and Banking' }
        ];
        document.getElementById('resume-output').innerHTML += `
          <h2>EDUCATION</h2>
          ${education.map(edu => `
            <p><strong>${edu.school}</strong> (${edu.location})<br>
            <em>${edu.degree}</em></p>`).join('')}`;
      }
    },
    { 
      code: "// Step 4: Adding my professional experience.",
      action: () => {}
    },
    { 
      code: "let experience = [\n  { title: 'AVP, Senior Business Analyst', company: 'First United Bank and Trust', year: 'June 2022 – Present', responsibilities: [\n    'Spearheaded the development and execution of major strategic initiatives that significantly increased operational efficiency and propelled the bank\\'s digital transformation.',\n    'Led the implementation of CRM and ERP systems (Salesforce, nCino), boosting loan origination process efficiency by 50% and improving deposit account operations by 30%.',\n    'Oversaw the integration of platforms: Azure Snowflake, Microsoft 365, Resolver, MuleSoft.',\n    'Collaborated with the CEO and leadership to support the bank\\'s goal of achieving a $30 billion asset target.'\n  ] },\n  { title: 'Enterprise Risk Management Analyst', company: 'First United Bank and Trust', year: 'August 2020 – June 2022', responsibilities: [\n    'Enhanced the bank\\'s risk management framework, contributing to balance sheet growth from $8B to $12B.',\n    'Established the Operational Risk Management team and improved risk processes across divisions.',\n    'Played a pivotal role in maintaining FDIC and third-party audit compliance.'\n  ] },\n  { title: 'Financial Services Accountant & Analyst', company: 'First United Bank and Trust', year: 'June 2020 – August 2020', responsibilities: [\n    'Led financial integration during acquisition of an insurance company.',\n    'Transitioned vendor payments from checks to ACH, improving efficiency by 30%.',\n    'Redesigned mortgage document workflows for improved efficiency.'\n  ] },\n  { title: 'Relationship Banker', company: 'First United Bank and Trust', year: 'June 2018 – June 2020', responsibilities: [\n    'Delivered exceptional customer service and exceeded performance goals.',\n    'Led consumer lending operations and implemented effective sales campaigns.'\n  ] }];",
      action: () => {
        const experience = [
          { title: 'AVP, Senior Business Analyst', company: 'First United Bank and Trust', year: 'June 2022 – Present', responsibilities: [
            'Spearheaded the development and execution of major strategic initiatives that significantly increased operational efficiency and propelled the bank\'s digital transformation.',
            'Led the implementation of CRM and ERP systems (Salesforce, nCino), boosting loan origination process efficiency by 50% and improving deposit account operations by 30%.',
            'Oversaw the integration of platforms: Azure Snowflake, Microsoft 365, Resolver, MuleSoft.',
            'Collaborated with the CEO and leadership to support the bank\'s goal of achieving a $30 billion asset target.'
          ]},
          { title: 'Enterprise Risk Management Analyst', company: 'First United Bank and Trust', year: 'August 2020 – June 2022', responsibilities: [
            'Enhanced the bank\'s risk management framework, contributing to balance sheet growth from $8B to $12B.',
            'Established the Operational Risk Management team and improved risk processes across divisions.',
            'Played a pivotal role in maintaining FDIC and third-party audit compliance.'
          ]},
          { title: 'Financial Services Accountant & Analyst', company: 'First United Bank and Trust', year: 'June 2020 – August 2020', responsibilities: [
            'Led financial integration during acquisition of an insurance company.',
            'Transitioned vendor payments from checks to ACH, improving efficiency by 30%.',
            'Redesigned mortgage document workflows for improved efficiency.'
          ]},
          { title: 'Relationship Banker', company: 'First United Bank and Trust', year: 'June 2018 – June 2020', responsibilities: [
            'Delivered exceptional customer service and exceeded performance goals.',
            'Led consumer lending operations and implemented effective sales campaigns.'
          ]}
        ];
        document.getElementById('resume-output').innerHTML += `
          <h2>EXPERIENCE</h2>
          ${experience.map(exp => `
            <h3>${exp.company}</h3>
            <h4><em>${exp.title}</em> (${exp.year})</h4>
            <ul>${exp.responsibilities.map(task => `<li>${task}</li>`).join('')}</ul>`).join('')}`;
      }
    },
    { 
      code: "// Step 5: Adding my skills and certifications.",
      action: () => {}
    },
    { 
      code: "let skills = 'Financial Analysis, Financial Modeling, Project Management, Python, JavaScript, SQL, Agile Methodologies, Azure Cloud, Salesforce Development';",
      action: () => {}
    },
    { 
      code: "let certifications = 'Certified Scrum Master (CSM), SAFe, Mastering Design Thinking, Certified Salesforce Business Analyst, Credit Risk Certification (CRC)';",
      action: () => {
        document.getElementById('resume-output').innerHTML += `
          <h2>SKILLS</h2>
          <p>Financial Analysis, Financial Modeling, Project Management, Python, JavaScript, SQL, Agile Methodologies, Azure Cloud, Salesforce Development</p>
          <h2>CERTIFICATIONS</h2>
          <p>Certified Scrum Master (CSM), SAFe, Mastering Design Thinking, Certified Salesforce Business Analyst, Credit Risk Certification (CRC)</p>`;
      }
    },
    { 
      code: "// Thanks for checking out my interactive resume! If you'd like to work together, visit my website below.",
      action: () => {
        document.getElementById('resume-output').innerHTML += `
          <p>Thanks for exploring my interactive resume! 🚀</p>
          <p>Let’s connect at: <a href="https://www.kylehughesofficial.com" target="_blank">www.kylehughesofficial.com</a></p>`;
      }
    }
  ];
  
  // Typing Logic
  let currentCode = '';
  let stepIndex = 0;
  let skip = false;
  
  function typeStep() {
    if (stepIndex < codeSteps.length && !skip) {
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
    } else if (skip) {
      renderFinalResume();
    }
  }
  
  function renderFinalResume() {
    skip = true;
    currentCode = codeSteps.map(step => step.code).join('\n\n');
    document.getElementById('code').textContent = currentCode;
    Prism.highlightAll();
    codeSteps.forEach(step => step.action());
    document.getElementById('skip-button').innerText = "Restart";
    document.getElementById('skip-button').onclick = () => location.reload();
  }
  
  document.getElementById('skip-button').addEventListener('click', renderFinalResume);
  
  typeStep();