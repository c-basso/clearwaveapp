// Guias 6–10.
module.exports = [
{
    id: 'iphone-speaker-crackling',
    slug: 'alto-falante-iphone-chiando',
    navLabel: 'Alto-falante do iPhone chiando',
    keyword: 'alto-falante do iPhone chiando',
    title: 'Alto-falante do iPhone chiando: causas e soluções',
    description: 'Alto-falante do iPhone chiando, estalando ou distorcendo? Descubra se é água, poeira ou alto-falante estourado e resolva com limpeza por som e tons.',
    h1: 'Alto-falante do iPhone chiando: ache a causa e resolva',
    shot: 'tone',
    quick: 'Chiado que aparece <strong>só no volume alto ou depois de molhar</strong> normalmente é água ou sujeira na membrana: faça 2–3 ciclos para tirar água e teste com uma varredura de frequências. Chiado em <strong>qualquer volume</strong>, ou zumbido em certas notas que continua depois de 24 horas secando, indica alto-falante danificado que precisa de conserto.',
    intro: '<p>Chiados, estalos e zumbidos são o som da membrana batendo em algo que não deveria: uma gota, um grão de poeira ou a própria borda danificada. O segredo é descobrir qual — e um tom de teste limpo é o jeito mais rápido de ouvir com clareza.</p>',
    manual: {
        heading: 'Como resolver o alto-falante do iPhone chiando',
        steps: [
            { name: 'Descarte a fonte do áudio', text: 'Toque outra música ou vídeo de boa qualidade. Alguns streams já chiam sozinhos.' },
            { name: 'Abaixe o volume', text: 'Se o chiado some abaixo de ~70%, algo a mais está forçando a membrana — geralmente água ou sujeira.' },
            { name: 'Tire água e sujeira', text: 'Alto-falante para baixo, volume 70–80%, tom grave por 30–60 segundos, 2–3 vezes.' },
            { name: 'Escove a grade', text: 'Use uma escova de dentes macia e seca para tirar fiapos dos furinhos.' },
            { name: 'Varra as frequências', text: 'Toque tons dos graves aos agudos. Um zumbido em uma frequência específica que continua depois da limpeza sugere dano.' }
        ]
    },
    app: {
        heading: 'Diagnostique e resolva com o Clear Wave',
        steps: [
            { name: 'Faça uma sessão para tirar água', text: 'Primeiro tire a água e solte a sujeira — isso resolve a maioria dos chiados depois de chuva ou respingos.' },
            { name: 'Abra o gerador de frequência', text: 'Deslize devagar para cima e para baixo. Anote a frequência em que o chiado aparece.' },
            { name: 'Isole o alto-falante no teste estéreo', text: 'Ative um canal de cada vez. Se só um lado chia, o problema é esse alto-falante.' },
            { name: 'Repita ou leve para o conserto', text: 'Se o chiado diminui a cada sessão, continue. Se nada muda depois de 24 horas secando, provavelmente está danificado.' }
        ]
    },
    sections: [
        { h2: 'Água, poeira ou alto-falante estourado', html: '<div class="table-wrap"><table><thead><tr><th>Sinal</th><th>Água</th><th>Poeira / sujeira</th><th>Estourado</th></tr></thead><tbody><tr><td>Começou depois de molhar</td><td>✔</td><td></td><td>Às vezes</td></tr><tr><td>Melhora depois de tirar água</td><td>✔</td><td>Em parte</td><td>✘</td></tr><tr><td>Chia em volume baixo</td><td>Raramente</td><td>Raramente</td><td>✔</td></tr><tr><td>Zumbe em frequências específicas</td><td>Às vezes</td><td>✔</td><td>✔</td></tr><tr><td>Melhora depois de 24 h secando</td><td>✔</td><td>✘</td><td>✘</td></tr></tbody></table></div>' },
        { h2: 'Fique de olho no volume', html: '<p>Volume máximo o tempo todo esquenta a bobina e piora o chiado. Para testar, fique em 70–80%. Se você usa o iPhone como caixa de som no talo todo dia, o <a href="/pt/guides/medidor-de-decibeis-iphone/">medidor de decibéis</a> ajuda a controlar os níveis.</p>' }
    ],
    faqs: [
        { q: 'Por que o alto-falante do iPhone chia no volume alto?', a: 'Água ou sujeira na membrana, ou a membrana chegando ao limite com grave forte. Limpe primeiro; se só chia com grave alto, abaixe o volume ou ajuste o equalizador.' },
        { q: 'A água pode fazer o alto-falante chiar?', a: 'Sim. Gotas na membrana vibram quando ela se mexe. Alguns ciclos para tirar água normalmente resolvem.' },
        { q: 'Se está chiando, está estourado?', a: 'Não necessariamente. Se continuar chiando em qualquer volume depois de limpar e secar por 24 horas, provavelmente sim.' }
    ],
    related: ['how-to-fix-blown-speaker', 'tone-generator-app-iphone', 'iphone-speaker-muffled'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'is-water-eject-safe', 'what-frequency-removes-water-from-speaker']
},
{
    id: 'water-eject-shortcut',
    slug: 'atalho-para-tirar-agua-iphone',
    navLabel: 'Atalho para tirar água do iPhone',
    keyword: 'atalho para tirar água do iPhone',
    title: 'Atalho «Water Eject» não funciona? A alternativa fácil',
    description: 'Como funciona o atalho da Siri «Water Eject», por que ele para de funcionar após atualizar o iOS e uma alternativa de um toque.',
    h1: 'Atalho para tirar água do iPhone: como funciona e o que usar no lugar',
    shot: 'clear',
    quick: 'O atalho «Water Eject» é um atalho da Siri criado pela comunidade que toca um tom de 165 Hz. Não é da Apple, precisa ser importado de um site de terceiros e pode parar de funcionar depois de uma atualização do iOS. Um app como o Clear Wave faz o mesmo com um toque, offline, e ainda traz teste estéreo, gerador de frequência e medidor de decibéis.',
    intro: '<p>Quem busca «tirar água do iPhone» acaba achando o famoso atalho. A ideia é boa, mas muita gente vê «Não é possível abrir este atalho», permissões faltando ou um som curto demais. Veja como ele funciona, como resolver os erros comuns e quando um app é mais fácil.</p>',
    manual: {
        heading: 'O que fazer se o atalho Water Eject não funcionar',
        steps: [
            { name: 'Atualize o iOS e o app Atalhos', text: 'Versões antigas do atalho podem falhar em iOS novos. Baixe a versão mais recente com o autor.' },
            { name: 'Reinstale o atalho', text: 'Apague o antigo no app Atalhos e adicione de novo pela página do autor.' },
            { name: 'Dê as permissões pedidas', text: 'Na primeira vez ele pede acesso — toque em Permitir.' },
            { name: 'Desative o silencioso e aumente o volume', text: 'Algumas versões tocam no volume do toque.' },
            { name: 'Rode 2–3 vezes com o alto-falante para baixo', text: 'Uma vez só raramente basta depois de molhar muito.' }
        ]
    },
    app: {
        heading: 'A alternativa de um toque: Clear Wave',
        steps: [
            { name: 'Instale o Clear Wave pela App Store', text: 'Sem importar atalhos nem permitir atalhos não confiáveis.' },
            { name: 'Toque para tirar a água', text: 'Alto-falante para baixo, volume ~75%.' },
            { name: 'Confira com o teste estéreo', text: 'Verifique os canais esquerdo e direito, algo que um atalho não faz.' }
        ]
    },
    sections: [
        { h2: 'Atalho ou app', html: '<div class="table-wrap"><table><thead><tr><th></th><th>Atalho Water Eject</th><th>App Clear Wave</th></tr></thead><tbody><tr><td>Criado por</td><td>Um usuário (não a Apple)</td><td>Desenvolvedor independente, aprovado pela App Store</td></tr><tr><td>Instalação</td><td>Link de um site de terceiros</td><td>App Store</td></tr><tr><td>Quebra após atualizar o iOS</td><td>Às vezes</td><td>Atualizado pela App Store</td></tr><tr><td>Progresso da sessão</td><td>Não</td><td>Sim</td></tr><tr><td>Teste estéreo, tons e decibéis</td><td>Não</td><td>Sim</td></tr><tr><td>Preço</td><td>Grátis</td><td>Download grátis, Pro opcional</td></tr></tbody></table></div>' },
        { h2: 'O iPhone tem uma função própria para tirar água?', html: '<p>Não. O Apple Watch tem a Trava de Água, que toca um som para esvaziar o alto-falante, mas o iPhone não tem nada igual. Por isso existem o atalho e os apps. Detalhes: <a href="/pt/faq/iphone-tem-funcao-tirar-agua/">o iPhone tem função para tirar água?</a></p>' }
    ],
    faqs: [
        { q: 'O atalho Water Eject é da Apple?', a: 'Não. É um atalho da comunidade, compartilhado em sites como o RoutineHub. A única remoção de água integrada da Apple está no Apple Watch (Trava de Água).' },
        { q: 'Por que o atalho diz que não pode ser aberto?', a: 'Geralmente porque foi feito para um iOS antigo ou o link expirou. Baixe a versão mais recente ou use um app.' },
        { q: 'Qual frequência o atalho Water Eject usa?', a: 'As versões mais populares tocam um tom de cerca de 165 Hz.' }
    ],
    related: ['water-eject-app-iphone', '165-hz-water-eject-sound', 'get-water-out-of-iphone-speaker'],
    faqLinks: ['does-iphone-have-built-in-water-eject', 'what-frequency-removes-water-from-speaker', 'does-water-eject-work']
},
{
    id: '165-hz-water-eject-sound',
    slug: 'som-165-hz-tirar-agua',
    navLabel: 'Som de 165 Hz para tirar água',
    keyword: 'som para tirar água do celular 165 Hz',
    title: 'Som de 165 Hz: a frequência para tirar água do celular',
    description: 'Por que 165 Hz é a frequência mais usada no som para tirar água do celular, como tons graves empurram a água para fora e como tocar com segurança.',
    h1: 'Som de 165 Hz: por que essa frequência tira a água do alto-falante',
    shot: 'tone',
    quick: '165 Hz é um tom grave que faz a membrana de um alto-falante pequeno de celular dar <strong>movimentos longos e fortes</strong>, sem sair do que ele consegue reproduzir. Esses movimentos empurram as gotas para fora da grade. Toque em 70–80% do volume, com o alto-falante para baixo, por 30–60 segundos, 2–3 vezes.',
    intro: '<p>Toda ferramenta para tirar água — o atalho da Siri, os sites, os apps — usa um tom grave, e 165 Hz é o número que mais aparece. Não é mágica: é um meio-termo prático entre «grave o bastante para mover muito ar» e «agudo o bastante para um alto-falante minúsculo conseguir tocar».</p>',
    manual: {
        heading: 'Como tocar um tom de 165 Hz com segurança',
        steps: [
            { name: 'Tire a capinha', text: 'Deixe a grade respirar e a água sair.' },
            { name: 'Alto-falante para baixo', text: 'A gravidade faz metade do trabalho.' },
            { name: 'Volume em 70–80%', text: 'O suficiente para empurrar a água; não precisa do máximo.' },
            { name: 'Toque 165 Hz por 30–60 segundos', text: 'Com um gerador de frequência ou um app para tirar água.' },
            { name: 'Repita e seque', text: '2–3 ciclos, secando as gotas entre eles.' }
        ]
    },
    app: {
        heading: 'Sons para tirar água no Clear Wave',
        steps: [
            { name: 'Inicie a remoção de água', text: 'A sessão do Clear Wave usa padrões calibrados de baixa frequência — você não precisa escolher um número.' },
            { name: 'Ou ajuste um tom manualmente', text: 'Abra o gerador de frequência e deslize até a frequência desejada, por exemplo 165 Hz.' },
            { name: 'Teste depois da limpeza', text: 'Percorra frequências mais altas para confirmar que o alto-falante soa limpo em toda a faixa.' }
        ]
    },
    sections: [
        { h2: 'Por que frequências baixas movem a água', html: '<p>No mesmo volume, frequências mais baixas obrigam a membrana a percorrer uma distância <em>maior</em> a cada ciclo. Apitos agudos quase não a movem. Um movimento longo funciona como um pistão que empurra o ar — e a água da grade — para fora. Mas grave demais (abaixo de uns 100 Hz), um alto-falante do tamanho de um celular já não reproduz bem o tom e o efeito cai. Por isso a faixa de 150–200 Hz é popular, especialmente 165 Hz.</p>' },
        { h2: '165 Hz é seguro para o meu alto-falante?', html: '<p>Sim, em volume razoável. É um som comum, na faixa de um baixo elétrico ou de uma voz masculina grave. Não toque nenhum tom a 100% por minutos seguidos e pare se ouvir uma trepidação forte.</p>' }
    ],
    faqs: [
        { q: '165 Hz é a melhor frequência para tirar água?', a: 'É uma boa escolha e a mais usada. Qualquer valor entre 150 e 200 Hz funciona de forma parecida em alto-falantes de celular. Sessões que variam o tom ajudam a soltar gotas teimosas.' },
        { q: 'Dá para ouvir um tom de 165 Hz?', a: 'Sim. É um zumbido grave bem audível, perto da nota mi abaixo do dó central.' },
        { q: 'Por quanto tempo toco o som de 165 Hz?', a: '30–60 segundos por ciclo, 2–3 ciclos. Depois de molhar muito, até 5.' }
    ],
    related: ['tone-generator-app-iphone', 'water-eject-shortcut', 'water-eject-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-water-eject-safe', 'how-many-times-run-water-eject']
},
{
    id: 'how-to-fix-blown-speaker',
    slug: 'alto-falante-estourado-o-que-fazer',
    navLabel: 'Alto-falante estourado: o que fazer',
    keyword: 'alto-falante do celular estourado',
    title: 'Alto-falante estourado: como saber e o que fazer',
    description: 'O alto-falante do celular estourou ou só está entupido de água e poeira? Teste em 2 minutos, tente o que funciona e saiba quando precisa de conserto.',
    h1: 'Alto-falante estourado: primeiro confira se ele estourou mesmo',
    shot: 'test',
    quick: 'Primeiro descarte água e poeira: 2–3 ciclos para tirar água, escove a grade e teste de novo. Um alto-falante realmente <strong>estourado</strong> (membrana rasgada ou bobina danificada) chia ou zumbe em qualquer volume e não se conserta por software — precisa ser trocado. Muitos alto-falantes de celular «estourados» estão só entupidos.',
    intro: '<p>«Estourado» quer dizer que o alto-falante sofreu dano físico — normalmente por volume excessivo, queda ou corrosão. Mas água e sujeira causam quase os mesmos sintomas. Antes de pagar um conserto, gaste dois minutos para descartar isso.</p>',
    manual: {
        heading: 'Como testar e consertar um alto-falante «estourado»',
        steps: [
            { name: 'Toque um áudio limpo em 50%', text: 'Se em 50% soa bem e só distorce muito alto, provavelmente não estourou.' },
            { name: 'Tire água e sujeira', text: 'Alto-falante para baixo, volume 70–80%, tom grave por 30–60 segundos, 2–3 vezes.' },
            { name: 'Escove a grade', text: 'Com uma escova macia e seca — nunca com agulhas ou alfinetes.' },
            { name: 'Varra os tons', text: 'Dos graves aos agudos. Um alto-falante estourado zumbe em muitas frequências, não só em uma.' },
            { name: 'Compare os alto-falantes', text: 'No teste esquerdo/direito, se um lado soa limpo e o outro trepida em qualquer volume, é esse que está danificado.' },
            { name: 'Troque se confirmar', text: 'Trocar o alto-falante do celular é um conserto comum na Apple ou numa boa assistência técnica.' }
        ]
    },
    app: {
        heading: 'Diagnostique um alto-falante estourado com o Clear Wave',
        steps: [
            { name: 'Limpe primeiro', text: 'Uma sessão para tirar água descarta água e poeira.' },
            { name: 'Teste estéreo', text: 'Toque o canal esquerdo e o direito separadamente e compare.' },
            { name: 'Varredura no gerador de frequência', text: 'Deslize devagar do grave ao agudo e anote onde zumbe.' },
            { name: 'Medidor de decibéis', text: 'Compare o volume dos alto-falantes — uma grande diferença confirma o problema.' }
        ]
    },
    sections: [
        { h2: 'Sinais de alto-falante estourado', html: '<ul class="check-list"><li>Chiado ou ruído em volume baixo, não só no alto.</li><li>Trepidação constante no grave que não melhora depois de 24 horas secando.</li><li>Um alto-falante fica mudo enquanto o outro funciona.</li><li>O problema começou logo depois de uma queda forte.</li></ul>' },
        { h2: 'Mitos sobre consertar alto-falante estourado', html: '<p><strong>«Uma frequência especial conserta alto-falante estourado.»</strong> Não. Tons movem água e poeira, mas não consertam um cone rasgado nem uma bobina queimada. <strong>«Dá para colar com cola ou fita.»</strong> Não no celular: os alto-falantes são módulos lacrados. Se estourou de verdade, a solução é trocar.</p>' }
    ],
    faqs: [
        { q: 'Alto-falante estourado volta ao normal sozinho?', a: 'Não. Mas um alto-falante que parece estourado por causa da água muitas vezes volta ao normal depois de secar ou de alguns ciclos para tirar água.' },
        { q: 'Quanto custa trocar o alto-falante do iPhone?', a: 'Depende do modelo e do lugar. Veja os preços de reparo da Apple ou de uma assistência local; o AppleCare+ pode cobrir.' },
        { q: 'O Clear Wave conserta alto-falante estourado?', a: 'Nenhum app conserta dano físico. O Clear Wave ajuda a descartar água e poeira e a descobrir qual alto-falante está danificado.' }
    ],
    related: ['iphone-speaker-crackling', 'left-right-speaker-test', 'fix-my-speaker'],
    faqLinks: ['can-water-eject-fix-blown-speaker', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'clean-iphone-speaker-dust',
    slug: 'limpar-alto-falante-iphone',
    navLabel: 'Como limpar o alto-falante do iPhone',
    keyword: 'como limpar o alto-falante do iPhone',
    title: 'Como limpar o alto-falante do iPhone (poeira e fiapos)',
    description: 'Limpe poeira e fiapos do alto-falante do iPhone sem danificar: escova macia, truque da fita e limpeza por som. O que você nunca deve usar.',
    h1: 'Como limpar o alto-falante do iPhone: poeira, fiapos e sujeira',
    shot: 'clear',
    quick: 'Desligue o iPhone e escove as grades com cuidado usando uma <strong>escova de dentes macia e seca</strong>, na diagonal. Tire os fiapos restantes com fita crepe ou massinha adesiva, pressionando de leve. Ligue o aparelho e faça uma sessão de limpeza por som (baixa frequência) para soltar o resto. Nunca use agulha, líquidos ou ar comprimido.',
    intro: '<p>Fiapos do bolso, poeira e maquiagem vão entupindo os furinhos do alto-falante aos poucos. Como acontece devagar, muita gente acha que o iPhone «ficou mais baixo com o tempo». Uma limpeza cuidadosa costuma devolver boa parte do volume e da nitidez.</p>',
    manual: {
        heading: 'Como limpar o alto-falante do iPhone passo a passo',
        steps: [
            { name: 'Desligue o iPhone e tire a capinha', text: 'É mais seguro e você enxerga melhor a grade.' },
            { name: 'Escove a grade', text: 'Com uma escova de dentes macia, limpa e seca. Escove na diagonal, para longe dos furinhos, não para dentro.' },
            { name: 'Tire os fiapos com fita', text: 'Pressione de leve fita crepe ou massinha adesiva sobre a grade e puxe. Não empurre para dentro dos furos.' },
            { name: 'Limpe o alto-falante de chamadas', text: 'Repita com cuidado na fenda de cima.' },
            { name: 'Faça uma limpeza por som', text: 'Ligue o iPhone, alto-falante para baixo, e toque um tom grave de limpeza para soltar as partículas.' }
        ]
    },
    app: {
        heading: 'Finalize com o limpador do Clear Wave',
        steps: [
            { name: 'Inicie a limpeza do alto-falante', text: 'A mesma sessão que tira a água também solta a poeira da membrana e da grade.' },
            { name: 'Use o modo Vibração', text: 'A opção de vibração ajuda a sacudir as partículas para fora da grade.' },
            { name: 'Meça a diferença', text: 'Use o medidor de decibéis antes e depois (mesma música, mesmo volume, mesma distância).' }
        ]
    },
    sections: [
        { h2: 'Nunca use no alto-falante', html: '<ul class="check-list check-list--no"><li>Agulhas, alfinetes ou palitos: podem furar a tela.</li><li>Álcool, água ou sprays de limpeza nos furinhos.</li><li>Ar comprimido: empurra a sujeira mais para dentro.</li><li>Aspirador colado na grade.</li></ul>' },
        { h2: 'Com que frequência limpar', html: '<p>Para a maioria das pessoas, a cada poucos meses basta. Se o celular vive num bolso cheio de fiapos, vai à praia ou fica em lugar empoeirado, uma escovada rápida e uma sessão de limpeza por som uma vez por mês mantêm o volume estável.</p>' }
    ],
    faqs: [
        { q: 'Posso limpar o alto-falante do iPhone com escova de dentes?', a: 'Sim — macia, limpa e seca. Escove com cuidado e na diagonal.' },
        { q: 'App limpador de alto-falante tira poeira?', a: 'Ajuda a soltar a poeira fina da membrana e da grade. Para fiapos compactados, combine com uma escova macia.' },
        { q: 'Por que o alto-falante continua baixo depois da limpeza?', a: 'Confira o Bluetooth e o volume e faça um teste estéreo. Se um alto-falante estiver bem mais baixo, pode precisar de conserto.' }
    ],
    related: ['fix-my-speaker', 'iphone-speaker-muffled', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work', 'is-water-eject-safe', 'is-clear-wave-free']
}
];
