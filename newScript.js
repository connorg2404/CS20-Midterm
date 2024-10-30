function createSection(id, title, content) {
        const section = document.createElement('section');
        section.id = id;
    
        const h2 = document.createElement('h2');
        h2.style.fontSize = '40px';
        h2.style.textAlign = 'center';
        h2.textContent = title;
    
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.style.fontSize = '30px';
        p.textContent = content;
    
        section.appendChild(h2);
        section.appendChild(p);
        document.body.appendChild(section);
}

const whatWeDoContent = "At Medford Animal Shelter, we provide a safe haven for abandoned and abused animals. Our dedicated team works tirelessly to rescue, rehabilitate, and find loving homes for pets in need. Through community outreach and education, we aim to promote responsible pet ownership and animal welfare.";

const howToHelpContent = "You can help our mission in many ways: by adopting a pet, donating supplies or funds, or reporting stray animals to local services. Every little bit counts and can make a difference in the lives of these animals.";

const donateContent = "We rely on the generosity of individuals like you to continue our work. Please consider making a donation to support our efforts in rescuing and caring for animals in need. Together, we can give them a second chance at life.";

createSection("whatWeDo", "What We Do", whatWeDoContent);
createSection("howToHelp", "How to Help", howToHelpContent);
createSection("donate", "Donate", donateContent);
    