document.getElementById('submitBtn').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (!title || !description) {
        alert('Please fill in both fields.');
        return;
    }

    const webhookUrl = 'https://discord.com/api/webhooks/1252305112182034463/iHYpnwD1aqP97qFdGs0gsRwdUgZmM31EZAw_y5ZdWewRtR7pLDCaNEix-fh_NrvlolKo';
    const message = {
        content: `**Bug Report**\n**Title:** ${title}\n**Description:** ${description}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    })
    .then(response => {
        if (response.ok) {
            alert('Bug report sent successfully!');
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
        } else {
            alert('Failed to send bug report.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the bug report.');
    });
});