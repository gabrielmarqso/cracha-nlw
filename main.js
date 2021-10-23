const links = {
  github: 'gabrielmarqso',
  youtube: 'GabrielMarquesK8',
  facebook: 'gabrielmarqso',
  instagram: 'gabrielmarqso',
  twitter: 'dearbigcheese'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      profilePic.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
