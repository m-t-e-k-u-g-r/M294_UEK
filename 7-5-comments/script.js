const api = 'http://10.70.4.8';
const post_request = api + '/challenges/1';
const post_comment = api + '/comments';

const form = document.forms.comment_form;

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const form_data = new FormData(form);
    const username = form_data.get("username");
    const comment = form_data.get("comment");

    fetch(post_request, {
        method: 'POST',
        body: JSON.stringify({
            message: comment,
            username: username,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
        const key = response.headers.get("Authorization")
        fetch(post_comment, {
            method: 'POST',
            body: JSON.stringify({
                message: comment,
                username: username,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': key,
            }
        })
    })
}