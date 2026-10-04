// Dúvidas. Cada uma tem sua página /pt/faq/<slug>/ («Saiba mais») e aparece no início.
module.exports = [
{
    id: 'what-is-clear-wave', slug: 'o-que-e-clear-wave',
    question: 'O que é o Clear Wave?',
    title: 'O que é o Clear Wave? O app para tirar água do alto-falante',
    description: 'O Clear Wave é um app grátis para iPhone e iPad que tira água e poeira do alto-falante com som e depois testa o áudio. O que faz e como baixar.',
    short: 'O Clear Wave é um app grátis para iPhone e iPad (na App Store: «Remover água do alto-falante») que tira água e poeira do alto-falante com ondas sonoras e depois confere o som com teste estéreo, gerador de frequência e medidor de decibéis.',
    body: '<p>O Clear Wave é um app de iOS para quando o alto-falante fica abafado, baixo ou chiando depois de molhar ou juntar poeira. Na App Store ele se chama <em>«Remover água do alto-falante»</em>; Clear Wave é a marca e este site.</p><h2>O que o Clear Wave faz</h2><ul class="check-list"><li><strong>Tirar água e limpar o alto-falante</strong>: sessões de som grave empurram a água para fora da grade e soltam a poeira.</li><li><strong>Teste estéreo</strong>: canal esquerdo e direito separados.</li><li><strong>Gerador de frequência</strong>: qualquer frequência para achar trepidações e falhas.</li><li><strong>Medidor de decibéis</strong>: volume antes e depois da limpeza.</li></ul><h2>Existe Clear Wave online?</h2><p>Não. É um app para iPhone e iPad (iOS 17.1+) que funciona offline — não precisa deixar uma aba do navegador aberta enquanto o som toca. Este site tem guias grátis passo a passo que funcionam também sem o app. Mas dá para tocar <a href="/pt/guides/som-165-hz-tirar-agua/">grátis o som de 165 Hz para tirar água online</a>, direto no navegador.</p><h2>Quem faz</h2><p>O Clear Wave é feito por um desenvolvedor independente e não tem relação com a Apple nem com outros produtos chamados «Clear Wave». O download é grátis; o acesso completo a todas as ferramentas é uma compra opcional no app, com teste grátis.</p>',
    guide: 'water-eject-app-iphone'
},
{
    id: 'does-water-eject-work', slug: 'som-para-tirar-agua-funciona',
    question: 'Som para tirar água do celular funciona mesmo?',
    title: 'Som para tirar água do celular funciona mesmo?',
    description: 'O som tira mesmo a água do alto-falante do iPhone? Sim, a que fica na grade. Como funciona, o que não resolve e como saber se deu certo.',
    short: 'Sim — para a água presa na grade do alto-falante, que causa a maior parte do som abafado depois de chuva, banho ou respingos. O som de baixa frequência faz a membrana empurrar as gotas para fora; muitas vezes dá para vê-las na grade.',
    body: '<p>Tirar água com som funciona porque o alto-falante é uma bombinha. Com um tom grave (cerca de 150–200 Hz), a membrana faz movimentos longos e empurra o ar — e a água da grade — pelos furinhos. É o mesmo princípio da Trava de Água do Apple Watch.</p><h2>O que resolve</h2><ul class="check-list"><li>Som abafado ou «debaixo d’água» depois de molhar</li><li>Volume mais baixo depois do banho, da chuva ou de respingos</li><li>Chiado causado por gotas na membrana</li><li>Em parte, poeira solta na grade</li></ul><h2>O que não resolve</h2><ul class="check-list check-list--no"><li>Água dentro da parte eletrônica do celular</li><li>Alto-falante estourado ou danificado fisicamente</li><li>Corrosão por água do mar ou bebidas açucaradas deixadas por dias</li></ul><h2>Como saber se deu certo</h2><p>Toque o mesmo vídeo com fala antes e depois. Melhor ainda: faça um teste estéreo e uma varredura lenta de frequências; os dois canais devem soar igualmente limpos, sem trepidação.</p>',
    guide: 'water-eject-app-iphone'
},
{
    id: 'is-water-eject-safe', slug: 'e-seguro-tirar-agua-com-som',
    question: 'É seguro tirar água do alto-falante com som?',
    title: 'É seguro tirar água do alto-falante do iPhone com som?',
    description: 'Um som para tirar água pode danificar o alto-falante do iPhone? Não, em volume normal. Por quê, qual volume usar e que erros evitar.',
    short: 'Sim. Um som para tirar água é um áudio comum em volume normal, como música. Mantenha em 70–80%, evite o máximo por muito tempo e pare se ouvir uma trepidação forte.',
    body: '<p>O alto-falante do iPhone foi feito para tocar grave, voz e alarme o dia inteiro. Um tom grave de 30–60 segundos está bem dentro da capacidade dele. O que causa dano é o uso <em>prolongado</em> no máximo, principalmente com grave pesado, que esquenta a bobina.</p><h2>Uso seguro</h2><ul class="check-list"><li>Volume em 70–80%, não 100%</li><li>30–60 segundos por ciclo, com uma pausa curta entre eles</li><li>Alto-falante para baixo</li><li>Pare se ouvir zumbido ou trepidação forte</li></ul><h2>Mais arriscado do que tirar água com som</h2><ul class="check-list check-list--no"><li>Secador de cabelo e outras fontes de calor</li><li>Ar comprimido na grade</li><li>Agulhas ou cotonetes nos furinhos</li><li>Arroz (a Apple desaconselha)</li></ul>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'how-long-for-water-to-leave-iphone-speaker', slug: 'quanto-tempo-alto-falante-seca',
    question: 'Quanto tempo o alto-falante do iPhone leva para secar?',
    title: 'Quanto tempo o alto-falante do iPhone leva para secar?',
    description: 'Sozinho, o alto-falante do iPhone seca em algumas horas ou até um dia. Com um som para tirar água, costumam bastar 1–3 ciclos de 30–60 segundos.',
    short: 'Sozinho, de algumas horas até um dia inteiro. Com um som para tirar água, a maior parte sai em 1–3 ciclos de 30–60 segundos; depois de um mergulho, podem ser necessários até 5 ciclos mais secagem ao ar.',
    body: '<p>A água na grade evapora devagar porque a cavidade é pequena e fechada. Por isso o som pode continuar abafado por horas depois do banho ou da chuva.</p><div class="table-wrap"><table><thead><tr><th>Situação</th><th>Sem ajuda</th><th>Tirando água com som</th></tr></thead><tbody><tr><td>Respingo, chuva, vapor do banho</td><td>1–4 horas</td><td>1–2 ciclos</td></tr><tr><td>Mergulho rápido (pia, poça)</td><td>Várias horas</td><td>2–3 ciclos + 30 min secando</td></tr><tr><td>Piscina, vaso, mergulho longo</td><td>Até 24 horas</td><td>3–5 ciclos + várias horas secando</td></tr></tbody></table></div><p>A Apple recomenda esperar pelo menos 30 minutos antes de carregar um iPhone molhado, e até 24 horas se aparecer o alerta de líquido.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'should-i-put-wet-iphone-in-rice', slug: 'colocar-iphone-no-arroz',
    question: 'Devo colocar o iPhone molhado no arroz?',
    title: 'Colocar o iPhone molhado no arroz? A Apple diz que não',
    description: 'A Apple desaconselha colocar um iPhone molhado no arroz: as partículas podem danificá-lo. O que fazer no lugar: batidinhas, secar e tirar a água com som.',
    short: 'Não. A Apple desaconselha isso, porque partículas pequenas de arroz podem entrar no iPhone. Dê batidinhas com a entrada para baixo, deixe secar ao ar e use um som para tirar a água do alto-falante.',
    body: '<p>O truque do arroz é um mito ultrapassado. O arroz não puxa a água mais rápido do que o ar livre, e o pó de amido e os grãos quebrados podem parar na entrada de carregamento e nas grades dos alto-falantes. O <a href="https://support.apple.com/pt-br/102643" rel="noopener" target="_blank">artigo de suporte da Apple</a> diz claramente para não fazer isso.</p><h2>O que fazer no lugar</h2><ol class="steps-inline"><li>Seque o celular e tire a capinha.</li><li>Dê batidinhas leves na palma da mão com a entrada de carregamento para baixo.</li><li>Faça 2–3 ciclos para tirar água com o alto-falante para baixo.</li><li>Deixe num lugar seco e ventilado; espere pelo menos 30 minutos antes de carregar.</li></ol>',
    guide: 'iphone-dropped-in-water'
},
{
    id: 'what-frequency-removes-water-from-speaker', slug: 'qual-frequencia-tira-agua',
    question: 'Qual frequência tira a água do alto-falante?',
    title: 'Qual frequência tira a água do alto-falante? (165 Hz)',
    description: 'Frequências baixas, entre 150 e 200 Hz, principalmente 165 Hz, tiram melhor a água do alto-falante do celular. Por que os tons graves funcionam.',
    short: 'Funcionam melhor as frequências baixas, por volta de 150–200 Hz; a mais usada é 165 Hz. Com tons graves, a membrana faz movimentos mais longos e empurra a água pela grade.',
    body: '<p>No mesmo volume, um tom mais grave obriga a membrana a se mover mais. Esse movimento longo bombeia ar — e água — pela grade. Mas bem abaixo de uns 100 Hz, um alto-falante pequeno de celular já não reproduz bem o tom. A faixa prática é 150–200 Hz, e 165 Hz virou padrão por causa do famoso atalho da Siri.</p><p>Sessões que variam um pouco o tom ajudam a soltar gotas teimosas. Depois, passe pelas frequências mais altas com um gerador para confirmar que o alto-falante soa limpo em toda a faixa.</p>',
    guide: '165-hz-water-eject-sound'
},
{
    id: 'can-water-eject-fix-blown-speaker', slug: 'tirar-agua-conserta-alto-falante-estourado',
    question: 'Tirar água conserta alto-falante estourado?',
    title: 'Tirar água com som conserta alto-falante estourado?',
    description: 'Tirar água com som não conserta alto-falante estourado, mas muitos «estourados» estão só molhados ou entupidos. Como diferenciar em 2 minutos.',
    short: 'Não — um alto-falante realmente estourado tem dano físico e precisa ser trocado. Mas muitos que parecem «estourados» estão só molhados ou entupidos, e tirar a água resolve. Teste antes de pagar um conserto.',
    body: '<p>Um alto-falante estourado tem a membrana rasgada ou a bobina danificada. Nenhum som, frequência ou app conserta isso. A boa notícia: água e sujeira causam sintomas quase iguais — chiado, zumbido, distorção — e esses têm solução.</p><h2>Teste de 2 minutos</h2><ol class="steps-inline"><li>Faça 2–3 ciclos para tirar água.</li><li>Toque um áudio limpo em 50%. Ainda distorcido? Pode ter estourado.</li><li>Faça um teste estéreo. Se um lado distorce em qualquer volume, provavelmente é esse o danificado.</li><li>Passe um gerador de frequência do grave ao agudo. Zumbido em tudo = defeito; trepidação em uma nota só = sujeira.</li></ol>',
    guide: 'how-to-fix-blown-speaker'
},
{
    id: 'does-water-eject-work-on-airpods', slug: 'tirar-agua-dos-airpods',
    question: 'Tirar água com som funciona nos AirPods?',
    title: 'Dá para tirar água dos AirPods com som?',
    description: 'Dá para tirar a água dos AirPods com um som? Só em parte. O que ajuda, o que a Apple recomenda e como testar o AirPod esquerdo e o direito.',
    short: 'Só em parte. Você pode tocar um som para tirar água pelos AirPods conectados, mas os alto-falantes deles são pequenos e vedados, então o efeito é limitado. Seque com um pano sem fiapos, deixe secar e depois teste os canais esquerdo e direito.',
    body: '<p>Com os AirPods conectados, o áudio — inclusive o som para tirar água — sai pelos próprios alto-falantes deles, não pelo alto-falante do iPhone. Isso pode mover um pouco de água da telinha, mas os fones são minúsculos e vedados: secar importa mais do que o som.</p><h2>O que fazer com AirPods molhados</h2><ul class="check-list"><li>Seque com um pano macio, seco e sem fiapos.</li><li>Deixe secar completamente antes de colocar no estojo de carregamento.</li><li>Não use calor, ar comprimido ou objetos pontiagudos na telinha.</li><li>Depois de secos, faça um teste estéreo para ver se os dois soam igual.</li></ul><p>AirPods (3ª geração), AirPods Pro e posteriores são resistentes a suor e água, mas não à prova d’água.</p>',
    guide: 'left-right-speaker-test'
},
{
    id: 'does-iphone-have-built-in-water-eject', slug: 'iphone-tem-funcao-tirar-agua',
    question: 'O iPhone tem função para tirar água?',
    title: 'O iPhone tem função para tirar água? Não — e por quê',
    description: 'O iPhone não tem botão para tirar água: só o Apple Watch tem a Trava de Água. Veja como tirar a água do iPhone com um atalho ou um app.',
    short: 'Não. Só o Apple Watch tem remoção de água integrada (Trava de Água). No iPhone você precisa de um app como o Clear Wave ou de um atalho da Siri feito pela comunidade.',
    body: '<p>A Trava de Água do Apple Watch toca uma sequência de sons para tirar a água do alto-falante depois de nadar. O iPhone não tem um ajuste parecido, mesmo a física sendo a mesma. iPhone XS/XR e posteriores avisam quando há líquido na entrada de carregamento, mas isso é detecção, não remoção.</p><h2>Suas opções no iPhone</h2><ul class="check-list"><li><strong>App para tirar água</strong>: um toque, offline, com testes para confirmar o resultado.</li><li><strong>Atalho da Siri</strong>: da comunidade, importado de um site de terceiros; pode quebrar depois de atualizar o iOS.</li><li><strong>Som em um site</strong>: precisa de internet e da tela ligada.</li></ul>',
    guide: 'water-eject-shortcut'
},
{
    id: 'how-many-times-run-water-eject', slug: 'quantas-vezes-tirar-agua',
    question: 'Quantas vezes devo tocar o som para tirar água?',
    title: 'Quantas vezes tocar o som para tirar água do alto-falante?',
    description: 'Toque o som 2–3 vezes depois de respingos e até 5 vezes depois de um mergulho, 30–60 segundos cada. Como saber quando o alto-falante está limpo.',
    short: '2–3 ciclos de 30–60 segundos depois de respingos, chuva ou vapor do banho. Até 5 ciclos depois de um mergulho (piscina, vaso), com alguns minutos secando entre eles. Pare quando o teste estéreo soar limpo dos dois lados.',
    body: '<p>Mais nem sempre é melhor. Depois que a água sai, ciclos extras não fazem nada. Decida com um teste rápido entre os ciclos.</p><div class="table-wrap"><table><thead><tr><th>Situação</th><th>Ciclos</th></tr></thead><tbody><tr><td>Respingo, garoa, vapor do banho</td><td>1–2</td></tr><tr><td>Chuva forte, caiu na pia</td><td>2–3</td></tr><tr><td>Piscina, vaso, banheira</td><td>3–5 + secar ao ar, repetir depois de uma hora</td></tr></tbody></table></div><p>Se depois de 5 ciclos e 24 horas secando o som não melhorou nada, provavelmente não é água — confira se há poeira ou defeito no alto-falante.</p>',
    guide: 'get-water-out-of-iphone-speaker'
},
{
    id: 'is-clear-wave-free', slug: 'clear-wave-e-gratis',
    question: 'O Clear Wave é grátis?',
    title: 'O Clear Wave é grátis? Preço e o que vem no app',
    description: 'O Clear Wave é grátis para baixar no iPhone e iPad. Uma assinatura opcional com teste grátis libera todas as ferramentas. O que vem e como cancelar.',
    short: 'O Clear Wave é grátis para baixar no iPhone e iPad. Uma assinatura opcional dentro do app (com teste grátis) dá acesso completo a todas as ferramentas: tirar água, teste estéreo, gerador de frequência e medidor de decibéis.',
    body: '<p>O Clear Wave — na App Store, <em>«Remover água do alto-falante»</em> — é grátis para baixar. O acesso completo às ferramentas vem com compras opcionais dentro do app, com teste grátis e uma opção vitalícia. A App Store mostra o preço atual na sua moeda antes de você confirmar qualquer coisa.</p><h2>O que vem no app</h2><ul class="check-list"><li>Sessões para tirar água e limpar o alto-falante</li><li>Teste estéreo esquerdo/direito</li><li>Gerador de frequência (deslize para mudar a frequência)</li><li>Medidor de decibéis</li></ul><h2>Gerenciar a assinatura</h2><p>As assinaturas são gerenciadas pela Apple. Para cancelar: <em>Ajustes → [seu nome] → Assinaturas</em> no iPhone. O Compartilhamento Familiar é compatível.</p>',
    guide: 'water-eject-app-iphone'
}
];
