var header = document.getElementsByTagName("header")[0];

header.innerHTML = `
  <nav>

    <div id="linksContainer">
      <ul>
        <li><a href="/">Le jeu</a></li>
        <li><a href="project.html">Le projet</a></li>
        <li><a href="team.html">L'équipe</a></li>
      </ul>
    </div>

    <div id="logoContainer">
      <a href="/"><img id="mainLogo" src="img/icon.png" alt="Call of Printers"></a>
    </div>

    <div id="downloadContainer">
      <a href="Unity.zip">
        <div id="downloadHeader">Télécharger</div>
      </a>
    </div>
  </nav>
`;

