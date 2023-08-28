document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const keyword = document.getElementById('search-input').value;
    
    // Here, you can define your keyword-page mappings
    const pageMappings = {
        'DEFORESTATION': 'https://clicktoreads.com/Deforestation.html',
        'SMART MOM BABY ITEMS': 'https://clicktoreads.com/SMART%20MOM%20BABY.html',
        'RADIOACTIVE':'https://clicktoreads.com/Radioactive.html',
        'radioactive': 'https://clicktoreads.com/Radioactive.html',
        'nutrition': 'https://clicktoreads.com/NUTRITION%E2%80%99S.html',
        'the internet': 'https://clicktoreads.com/The%20Internet.html',
        'cyber security': 'https://clicktoreads.com/Cyber%20Security.html',
        'Psychology': 'https://clicktoreads.com/psychology.html',
        'how to reduce pollution': 'https://clicktoreads.com/environment%20pollution.html',
        'baby items': 'https://clicktoreads.com/SMART%20MOM%20BABY.html',
        'pollution': 'https://clicktoreads.com/environment%20pollution.html',
        'home': 'https://clicktoreads.com/index.html',
        ' features' : 'https://clicktoreads.com/Features.html',
        'new articles' : 'https://clicktoreads.com/New%20Articles.html'
        // Add more mappings as needed
    };
    
    if (pageMappings[keyword]) {
        window.location.href = pageMappings[keyword];
    } else {
        // Handle case where keyword doesn't match any mapping
        alert('Keyword not found');
    }
});
 

