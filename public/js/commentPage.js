async function newFormHandler(event) {
    event.preventDefault();
    const game_name = document.querySelector('#game_name').value;
    const comment = document.querySelector('#comment').value;
    const gamer_name = document.querySelector('#gamer_name').value;

    // Send fetch request to add a new 
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
        game_name,
        comment,
        gamer_name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the comment is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/allComments');
    } else {
      alert('Failed to add comment');
    }
  }
  
  document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);
    