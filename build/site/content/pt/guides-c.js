// Guias 11–14.
module.exports = [
{
    id: 'iphone-dropped-in-water',
    slug: 'iphone-caiu-na-agua',
    navLabel: 'iPhone caiu na água',
    keyword: 'iPhone caiu na água o que fazer',
    title: 'iPhone caiu na água: o que fazer nos primeiros 30 minutos',
    description: 'iPhone caiu na água, na piscina ou no vaso? O que fazer já: secagem recomendada pela Apple, alerta de líquido, tirar água do alto-falante e quando carregar.',
    h1: 'iPhone caiu na água? O que fazer nos primeiros 30 minutos',
    shot: 'clear',
    quick: 'Tire da água, seque e <strong>não carregue</strong>. Dê batidinhas leves na palma da mão com a entrada para baixo, deixe num lugar seco e ventilado e espere pelo menos 30 minutos para carregar (até 24 horas se aparecer o alerta de líquido). Para o som abafado, toque um som para tirar água com o alto-falante para baixo. <strong>Nada de arroz nem secador.</strong>',
    intro: '<p>Os iPhones atuais são resistentes à água (IP67 ou IP68, dependendo do modelo), então um mergulho rápido costuma ser superado. Mas resistente não é à prova d’água, essa proteção diminui com o tempo e danos por líquido não são cobertos pela garantia padrão da Apple. O que você fizer na próxima meia hora faz diferença.</p>',
    manual: {
        heading: 'O que fazer agora',
        steps: [
            { name: 'Tire da água e desligue se ele estiver estranho', text: 'Se a tela piscar ou o aparelho se comportar de forma estranha, desligue.' },
            { name: 'Tire a capinha', text: 'Seque tudo com um pano macio que não solte fiapos.' },
            { name: 'Enxágue se não era água doce', text: 'Orientação da Apple para iPhones resistentes a respingos: se entrou em contato com algo que não seja água (água do mar, refrigerante, água com cloro da piscina), enxágue a área com água da torneira, depois limpe e seque.' },
            { name: 'Tire a água da entrada', text: 'Dê batidinhas leves com a entrada de carregamento virada para baixo contra a mão.' },
            { name: 'Libere os alto-falantes com som', text: 'Alto-falante para baixo, volume 70–80%, som para tirar água por 30–60 segundos, 2–3 vezes.' },
            { name: 'Seque antes de carregar', text: 'Deixe num lugar seco com alguma ventilação. Espere pelo menos 30 minutos; se aparecer o alerta de líquido, até ele sumir (até 24 horas).' }
        ]
    },
    app: {
        heading: 'Recupere o som com o Clear Wave',
        steps: [
            { name: 'Inicie a remoção de água', text: 'Primeiro com o alto-falante de baixo virado para baixo.' },
            { name: 'Vire para o alto-falante de chamadas', text: 'Segunda sessão com a parte de cima para baixo.' },
            { name: 'Confira os dois canais', text: 'O teste estéreo confirma se esquerda e direita soam igualmente limpos.' },
            { name: 'Repita depois de secar', text: 'Depois de uma hora, faça mais uma sessão — a água pode voltar para a grade.' }
        ]
    },
    sections: [
        { h2: '«Líquido detectado no conector Lightning / USB-C»', html: '<p>iPhone XS, iPhone XR e modelos posteriores avisam quando há líquido na entrada de carregamento. Se aparecer, desconecte o cabo, tire a água com batidinhas e deixe secar. Só use a opção de emergência para carregar em caso de real necessidade. Segundo a Apple, você pode continuar usando um carregador sem fio enquanto a entrada seca.</p>' },
        { h2: 'O que não fazer', html: '<ul class="check-list check-list--no"><li><strong>Arroz</strong>: a Apple desaconselha; pó e grãos de arroz podem entrar no iPhone.</li><li><strong>Secador, forno, aquecedor</strong>: o calor prejudica a bateria e as vedações.</li><li><strong>Cotonete ou papel na entrada</strong>.</li><li><strong>Carregar molhado</strong>.</li></ul>' }
    ],
    faqs: [
        { q: 'Quanto tempo esperar para carregar o iPhone molhado?', a: 'A Apple recomenda pelo menos 30 minutos, e até 24 horas se o alerta de líquido continuar aparecendo.' },
        { q: 'Meu iPhone é à prova d’água?', a: 'Nenhum iPhone é à prova d’água. Do iPhone 7 em diante eles são resistentes à água (IP67 ou IP68). A resistência diminui com o tempo e o uso.' },
        { q: 'Meu iPhone caiu no vaso sanitário, o que faço?', a: 'Tire, enxágue rapidamente a parte de fora com água limpa da torneira, seque, faça alguns ciclos para tirar água do alto-falante e deixe secar antes de carregar.' }
    ],
    related: ['get-water-out-of-iphone-speaker', 'iphone-speaker-muffled', 'water-eject-app-iphone'],
    faqLinks: ['should-i-put-wet-iphone-in-rice', 'how-long-for-water-to-leave-iphone-speaker', 'is-water-eject-safe']
},
{
    id: 'left-right-speaker-test',
    slug: 'teste-alto-falante-esquerdo-direito',
    navLabel: 'Teste de alto-falante esquerdo e direito',
    keyword: 'teste de som esquerdo e direito',
    title: 'Teste de som esquerdo e direito: iPhone e fones',
    description: 'Faça um teste de som esquerdo e direito no iPhone, AirPods ou fones em segundos. Ache o canal baixo, abafado ou mudo e veja o que fazer.',
    h1: 'Teste de som esquerdo e direito: confira os dois canais em segundos',
    shot: 'test',
    quick: 'Um teste esquerdo/direito (estéreo) toca o som em <strong>um canal por vez</strong> para você ouvir se algum alto-falante está baixo, abafado ou mudo. No iPhone, o alto-falante de chamadas e o de baixo são os dois canais. Se um lado soar pior depois de molhar, faça a remoção de água nesse alto-falante e teste de novo.',
    intro: '<p>Com os dois alto-falantes tocando juntos, é fácil não perceber um problema em um lado. Separar os canais deixa isso óbvio e mostra exatamente qual alto-falante limpar, secar ou consertar. Também funciona com fones, AirPods e caixas de som Bluetooth.</p>',
    manual: {
        heading: 'Como fazer o teste de som esquerdo e direito',
        steps: [
            { name: 'Desative o Áudio Mono', text: 'Ajustes → Acessibilidade → Áudio e Visual → «Áudio Mono» precisa estar desligado, senão os dois canais tocam o mesmo som.' },
            { name: 'Confira o balanço', text: 'No mesmo menu, o controle de balanço deve estar no centro entre E e D.' },
            { name: 'Toque só o canal esquerdo', text: 'Qual alto-falante toca e o som está limpo?' },
            { name: 'Toque só o canal direito', text: 'Compare volume e nitidez com o esquerdo.' },
            { name: 'Resolva o lado fraco', text: 'Abafado = água ou poeira (limpe). Mudo ou chiando = possível defeito.' }
        ]
    },
    app: {
        heading: 'Teste estéreo no Clear Wave',
        steps: [
            { name: 'Abra o teste estéreo', text: 'Você verá um controle para o canal esquerdo e outro para o direito.' },
            { name: 'Toque em On no esquerdo', text: 'O som deve sair de um lado só.' },
            { name: 'Toque em On no direito', text: 'Compare com o esquerdo.' },
            { name: 'Limpe o lado fraco', text: 'Faça a remoção de água com esse alto-falante para baixo e teste de novo.' }
        ]
    },
    sections: [
        { h2: 'Qual alto-falante do iPhone é o esquerdo e qual é o direito?', html: '<p>Na vertical, o iOS divide o estéreo entre o <strong>alto-falante de baixo</strong> e o <strong>alto-falante de chamadas</strong>. Na horizontal, o iOS troca os canais para que esquerda e direita combinem com o jeito que você segura o iPhone. Faça o teste na posição em que você costuma ver vídeos.</p>' },
        { h2: 'Testando AirPods e fones', html: '<p>Conecte os fones e faça o mesmo teste. Se um AirPod estiver mais baixo, limpe a telinha com cuidado usando uma escova macia e seca e confira o balanço em Acessibilidade. A umidade em fones vedados pode demorar para secar — veja <a href="/pt/faq/tirar-agua-dos-airpods/">tirar água com som funciona nos AirPods?</a></p>' }
    ],
    faqs: [
        { q: 'Por que meu iPhone só toca por um alto-falante?', a: 'Confira se o Áudio Mono está desligado e o balanço centralizado. Depois faça um teste estéreo; se um lado estiver abafado, pode ter água ou poeira.' },
        { q: 'Dá para testar o AirPod esquerdo e o direito?', a: 'Sim. Conecte e rode um teste estéreo — cada fone deve tocar apenas o próprio canal.' },
        { q: 'Por que o alto-falante de chamadas é mais baixo que o de baixo?', a: 'Ele é menor e feito para ligações, então é um pouco mais baixo mesmo. Uma diferença grande ou som abafado indicam fiapos ou água na grade dele.' }
    ],
    related: ['how-to-fix-iphone-speaker', 'how-to-fix-blown-speaker', 'decibel-meter-app-iphone'],
    faqLinks: ['does-water-eject-work-on-airpods', 'can-water-eject-fix-blown-speaker', 'is-clear-wave-free']
},
{
    id: 'decibel-meter-app-iphone',
    slug: 'medidor-de-decibeis-iphone',
    navLabel: 'Medidor de decibéis para iPhone',
    keyword: 'medidor de decibéis iPhone',
    title: 'Medidor de decibéis para iPhone: meça o ruído em dB',
    description: 'Transforme o iPhone em decibelímetro: meça o ruído em dB, confira o volume do alto-falante e os níveis seguros. Incluso no Clear Wave.',
    h1: 'Medidor de decibéis para iPhone: ruído e volume do alto-falante',
    shot: 'meter',
    quick: 'Um app medidor de decibéis (decibelímetro) usa o microfone do iPhone para estimar o volume de um som. Use para comparar o alto-falante antes e depois da limpeza, medir o barulho de um ambiente ou ficar abaixo de ~85 dB, nível em que a exposição longa prejudica a audição. Medidores de celular são aproximados: ótimos para comparar, não para medições certificadas.',
    intro: '<p>Um medidor de decibéis transforma «acho que está mais baixo» em número. Ajuda depois de tirar água ou poeira, quando você quer a prova de que o alto-falante voltou ao normal — e em dúvidas do dia a dia, como «esse bar está barulhento demais?» ou «o tablet do meu filho está alto demais?».</p>',
    manual: {
        heading: 'Como medir o volume do alto-falante com um decibelímetro',
        steps: [
            { name: 'Escolha um som de referência', text: 'A mesma música ou tom de teste, no mesmo volume, sempre.' },
            { name: 'Fixe a distância', text: 'Deixe outro aparelho com o medidor sempre à mesma distância (ex.: 30 cm) do alto-falante, ou meça o ambiente com o próprio iPhone.' },
            { name: 'Meça no silêncio', text: 'O ruído de fundo atrapalha a leitura.' },
            { name: 'Anote a média', text: 'Observe por 10–15 segundos e anote o valor típico.' },
            { name: 'Compare antes e depois', text: 'Depois da limpeza, meça de novo com as mesmas condições.' }
        ]
    },
    app: {
        heading: 'Use o medidor de decibéis do Clear Wave',
        steps: [
            { name: 'Abra o DB Meter', text: 'Permita o acesso ao microfone quando pedir — o medidor precisa dele para ouvir.' },
            { name: 'Comece a medir', text: 'O indicador mostra o nível atual em dB com um rótulo como «Conversa normal».' },
            { name: 'Pare a medição', text: 'Toque em Stop Monitoring. As leituras são processadas no aparelho.' }
        ]
    },
    sections: [
        { h2: 'Níveis de som comuns', html: '<div class="table-wrap"><table><thead><tr><th>Som</th><th>Nível aprox.</th></tr></thead><tbody><tr><td>Quarto silencioso, sussurro</td><td>30 dB</td></tr><tr><td>Conversa normal</td><td>50–60 dB</td></tr><tr><td>Rua movimentada, aspirador</td><td>70–80 dB</td></tr><tr><td>Limite de risco para a audição em exposição longa (8 h)</td><td>85 dB</td></tr><tr><td>Show, balada</td><td>100–110 dB</td></tr></tbody></table></div><p>Cada +10 dB é percebido como mais ou menos o dobro do volume.</p>' },
        { h2: 'O medidor de decibéis do iPhone é preciso?', html: '<p>Os microfones do iPhone são bons, mas não calibrados como equipamento de laboratório e são ajustados para voz. Espere leituras com poucos dB de diferença para sons do dia a dia — perfeito para comparar antes e depois no mesmo celular. Para medições legais ou de trabalho, use um decibelímetro certificado.</p>' }
    ],
    faqs: [
        { q: 'O iPhone consegue medir decibéis?', a: 'Sim, com um app medidor que usa o microfone. O Apple Watch e o app Saúde também registram o nível de ruído do ambiente.' },
        { q: 'Qual nível de decibéis é seguro?', a: 'Exposição prolongada acima de uns 85 dB por horas pode prejudicar a audição. Exposição curta a sons mais altos tem menos risco.' },
        { q: 'O medidor grava áudio?', a: 'O medidor do Clear Wave escuta para medir o nível no seu aparelho. Segundo a App Store, nenhum dado é vinculado à sua identidade.' }
    ],
    related: ['clean-iphone-speaker-dust', 'left-right-speaker-test', 'tone-generator-app-iphone'],
    faqLinks: ['is-clear-wave-free', 'does-water-eject-work', 'is-water-eject-safe']
},
{
    id: 'tone-generator-app-iphone',
    slug: 'gerador-de-frequencia-iphone',
    navLabel: 'Gerador de frequência para iPhone',
    keyword: 'gerador de frequência iPhone',
    title: 'Gerador de frequência para iPhone: qualquer tom em Hz',
    description: 'Toque qualquer tom de teste no iPhone: escolha a frequência em Hz, vá dos graves aos agudos para testar o alto-falante ou toque 165 Hz para tirar água.',
    h1: 'Gerador de frequência para iPhone: teste o alto-falante com qualquer tom',
    shot: 'tone',
    quick: 'Um gerador de frequência toca uma onda senoidal pura na frequência escolhida. <strong>Vá devagar dos graves aos agudos</strong> para ouvir onde o alto-falante trepida, zumbe ou fica fraco — um jeito rápido de conferir o alto-falante do celular depois de molhar. Você também pode ajustar um tom grave (≈165 Hz) para ajudar a tirar a água.',
    intro: '<p>A música esconde defeitos; um único tom puro os revela. Por isso técnicos de som usam geradores de frequência — e por isso ele é uma das melhores ferramentas para conferir se o alto-falante do iPhone ficou totalmente livre depois de tirar a água.</p>',
    manual: {
        heading: 'Como testar um alto-falante com um gerador de frequência',
        steps: [
            { name: 'Volume em 50–70%', text: 'O bastante para ouvir defeitos sem que tudo distorça.' },
            { name: 'Comece pelos graves', text: 'Por volta de 100–200 Hz. Alto-falantes pequenos reproduzem mal o grave profundo, então tons muito baixos soam fracos — é normal.' },
            { name: 'Suba devagar', text: 'Passe pelos médios (500–4000 Hz), onde fica a voz. Preste atenção em zumbidos e trepidações.' },
            { name: 'Confira os agudos', text: 'Continue até 10.000 Hz ou mais em volume baixo. Agudos faltando podem indicar água ou poeira na grade.' },
            { name: 'Anote as frequências com problema', text: 'Trepidação em uma nota só sugere sujeira; zumbido em tudo sugere defeito.' }
        ]
    },
    app: {
        heading: 'Use o gerador de frequência do Clear Wave',
        steps: [
            { name: 'Abra o Tone Generator', text: 'A frequência atual aparece no centro da tela (por exemplo, 1028 Hz).' },
            { name: 'Deslize para cima ou para baixo', text: 'Deslize para subir ou descer a frequência e percorrer a faixa.' },
            { name: 'Pare o tom', text: 'Toque em Stop Tone. Se ouvir trepidação, faça a remoção de água e teste de novo.' }
        ]
    },
    sections: [
        { h2: 'Frequências de teste úteis', html: '<div class="table-wrap"><table><thead><tr><th>Frequência</th><th>Uso</th></tr></thead><tbody><tr><td>~165 Hz</td><td>Tom para tirar água de alto-falantes de celular</td></tr><tr><td>440 Hz</td><td>Lá de referência para afinação</td></tr><tr><td>1000 Hz</td><td>Tom de teste padrão</td></tr><tr><td>2000–4000 Hz</td><td>Faixa de clareza da voz — é aqui que se nota o som abafado</td></tr><tr><td>10.000 Hz ou mais</td><td>Teste de agudos; a sensibilidade do ouvido cai com a idade</td></tr></tbody></table></div>' },
        { h2: 'Cuide da sua audição', html: '<p>Tons puros parecem mais altos e cansam mais que música. Mantenha o volume moderado, não encoste o alto-falante no ouvido e faça pausas.</p>' }
    ],
    faqs: [
        { q: 'Para que serve um gerador de frequência?', a: 'Para testar alto-falantes e fones, achar trepidações, conferir a própria audição, afinar instrumentos e tocar tons graves que ajudam a tirar água do alto-falante do celular.' },
        { q: 'O iPhone toca frequências muito baixas?', a: 'Toca, mas alto-falantes pequenos reproduzem mal o grave profundo, então tons abaixo de uns 150 Hz soam fracos.' },
        { q: 'O gerador de frequência do Clear Wave é grátis?', a: 'O Clear Wave é grátis para baixar. Algumas ferramentas avançadas fazem parte da assinatura opcional, que tem teste grátis.' }
    ],
    related: ['165-hz-water-eject-sound', 'iphone-speaker-crackling', 'decibel-meter-app-iphone'],
    faqLinks: ['what-frequency-removes-water-from-speaker', 'is-clear-wave-free', 'is-water-eject-safe']
}
];
