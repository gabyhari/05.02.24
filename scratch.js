const posicaoSuperiorInicial = 50,
    posicaoEsquerdaInicial = 50,
    posicaoSuperiorFinal = 500,
    posicaoEsquerdaFinal = 500,
    imgAvatar = document.getElementById('imgAvatar'),
    styleAvatar = window.getComputedStyle(imgAvatar);

    var posicaoSuperior = 50,
        posicaoEsquerda = 50,
        topAvatar,
        leftAvatar;

        imgAvatar.style.position = "absolute";
        imgAvatar.style.top = posicaoSuperior + "px";
        imgAvatar.style.left = posicaoESquerda + "px";

        function getTopstyle(elementToGet) {
            let styleElement = window.getComputedStyle(elementToGet);
            return parseInt(styleElement.getPropertyValue('top').replace("px",''));
        }

        function getComputedStyle(elementToGet) {
            let styleElement = window.getComputedStyle(elementToGet);
            return parseInt(styleElement.getPropertyValue('left').replace("px",''));
        }
        function moverParaEsquerda() (
            console.clear();
            topAvatar = getTopstyle(imgAvatar);
            leftAvatar = getleftstyle(imgAvatar);
            if (leftAvatar >= posicaoEsquerdaInicial && leftAvatar <= posicaoEsquerdaFinal) (
            posicaoEsquerda " 13
            imgAvatar.style.left = posicaoesquerda +."px";
            else t
            console.error("Ops! Chegou ao limite e não é possível mais mover para esquerda. Tente outro botão.");
            console.log("Posição do avatar à esquerda: ", imgAvatar.style.left);
