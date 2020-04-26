import axios from 'axios';
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const name = formData.get('name');
            const author_email = formData.get('author_email');
            const topic_title = formData.get('topic_title');
            const target_level = formData.get('target_level');
            const topic_details = formData.get('topic_details');
            const expected_result = formData.get('expected_result');
            const obj = {
                name,
                author_email,
                topic_details,
                topic_title,
                target_level,
                expected_result,
            }
            console.log(obj)
            // axios.post('http://localhost:7777/video-request', obj);
        })

})