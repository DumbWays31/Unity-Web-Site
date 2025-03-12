fetch("footer.html")
            .then((response) => response.text())
            .then((html) => {
                document.getElementById("dynamicFooterContainer").innerHTML = html;
            })
            .catch((error) =>
                console.error("Erreur lors du chargement du pied de page:", error)
            );