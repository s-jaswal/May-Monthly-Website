const teamMembers = [
    {
        name: 'The Brain',
        imageURL: 'Images Folder/brain.jpg',
        activelyPlaying: true,
        type: 'Learning Machine',
        skills: ['Processing information', 'Solving problems', 'Adapting to new situations'],
        strengths: 'Making complex connections', 
        weaknesses: 'Susceptible to injury',
        biography: 'The brain is the most complex organ in the human body. It controls everything we do, from thinking and feeling to moving and learning.'
    },
    {
        name: 'The Heart',
        imageURL: 'Images Folder/heart.webp',
        type: 'Vital Organ',
        skills: ['Pumping blood', 'Regulating Blood Flow', 'Sending electrical signals'],
        strengths: 'Endurance',
        weaknesses: 'Can be affected by stress', 
        biography: 'The heart is a muscular organ that plays a vital role in the circulator system.It pumps blood throughout the body, delivering oxygen and nutrients to cells and removing waste products.'
    },
    {
        name: 'The Lungs',
        imageURL: 'Images Folder/lungs.jpg',
        type: 'Respiratory Organ',
        skills: ['Gas exchange', 'Breathing', 'Maintaining Plood PH'],
        strengths: 'Adaptability',
        weaknesses: 'Poluution and Smoke',
        biography: 'The lungs are a pair of spongy organs that play a vital role in respiration. They take oxygen from the air we breather and release carbon dioxide, a waste product, from our bodies.'
    },
    {
        name: 'The Kidneys',
        imageURL: 'Images Folder/kidneys.jpg',
        type: 'Excretory Organ',
        skills: ['Filtering blood', 'Removing waste', 'Maintaining water balance'],
        strengths: 'Filtration',
        weaknesses: 'Disease and Toxins',
        biography: 'The Kidneys are two bean-shaped organs that play a vital role in the excretory system. They filter waste products from the blood, regulate body fluids, and produce hormones.'
    },
    {
        name: 'The Liver',
        imageURL: 'Images Folder/liver.jpg',
        type: 'Digestive Organ',
        skills: ['Filtering blood', 'Processing nutrients', 'Making proteins'],
        strengths: 'Essential for metabolism and Nutrient storage',
        weaknesses: 'Injury and Toxins',
        biography: 'The liver is the largest and most complex organ in the body. It plays a vital role in digestion, metabolism, and detoxification. The liver filters harmful substances from the blood and processes nutrients from food. '
    },
    {
        name: 'The Skin',
        imageURL: 'Images Folder/skin.jpg',
        type: 'Protective Barrier',
        skills: ['Protection from injury', 'Sensation', 'Temperature regulation'],
        strengths: 'Durability and Disease prevention',
        weaknesses: 'Sun Damage and Dehydration',
        biography: 'The skin is the largest organ of the body. It acts as a protective barrier against the environment and helps regulate body temperature.'
    },
    {
        name: 'The Bone Marrow',
        imageURL: 'Images Folder/bone marrow.jpg',
        type: 'Blood Cell Factory',
        skills: ['Making blood cells', 'Storing Fat', 'Supporting the immune system'],
        strengths: 'Production and Versatility',
        weaknesses: 'Disease and Injury',
        biography: 'The bone marrow is a spongy tissue found inside some of your bones. It has the important job of producing red blood cells, white blood cells, and platelets, all essential for keeping you healthy.'
    },
    {
        name: 'The Stomach',
        imageURL: 'Images Folder/stomach.avif',
        type: 'Muscular Sac',
        skills: ['Breaking down food', 'Storing food', 'Starting digestion'],
        strengths: 'Muechanical breakdwon and Acid production',
        weaknesses: 'Ulcers and Inflammation',
        biography: 'The stomach is a muscular sac-like organ that is part of the digestive system. it breaks down food.'
    },
    {
        name: 'The Veins',
        imageURL: 'Images Folder/veins.webp',
        type: 'Blood Vessel Network',
        skills: ['Carrying blood back to the heart', 'Helping regulate blood pressure',],
        strengths: 'Transport and Capacity',
        weaknesses: 'Varicosr veins and Blood clots',
        biography: 'The veins are a network of vessels that carry blood back to the heart. They have thinner walls than arteries and valves that help keep blood flowing in the right direction.'
    },
    {
        name: 'The Pancreas',
        imageURL: 'Images Folder/pancreas.jpg',
        type: 'Dual-Function Gland',
        skills: ['Digesting food with enzymes', 'Regulating blood sugar with hormones',],
        strengths: 'Essential for digestion and Blood sugar control',
        weaknesses: 'Pancreatitis and Certain diseases',
        biography: 'The pancreas is a gland that sits behind your stomach. It has two important jobs.'
    }
];

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards');

    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');

        // Styling card based on position:
        let backgroundColor;

        switch (member.type.toLowerCase()) {
            case 'color fairy':
                backgroundColor = '#ffc107'; // Yellow for color fairy
                break;
            case 'animal fairy':
                backgroundColor = '#28a745'; // Green for animal fairy
                break;
            case 'flower fairy':
                backgroundColor = '#007bff'; // Blue for flower
                break;
            case 'talent fairy':
                backgroundColor = '#dc3545'; // Red for talent
                break;
            default:
                backgroundColor = '#800080'; // purple for other positions
        }
        card.style.backgroundColor = backgroundColor;

        // Create a list of Skills with <li> tags
        const skillsList = member.skills
            .map(skill => `<li>${skill}</li>`).join('');

        card.innerHTML = `
            <div class="card">
                <img src="${member.imageURL}" class="img-fluid team-member-image" alt="${member.name}">
                <div class="card-header">${member.name}</div>
                <div class="card-body">
                    <p><strong>Type:</strong> ${member.type}</p>
                    <p><strong>Skills:</strong> 
                        <ul>
                            ${skillsList}
                        </ul>
                    </p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
}

window.onload = generateTeamCards;