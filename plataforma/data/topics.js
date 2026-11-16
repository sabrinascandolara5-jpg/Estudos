/* Resumos didáticos — baseados nas aulas das Profas. Juliana Issa Hori (Patologia) e Karina F. Zoccal (Imunologia) */
window.TOPICS = [
/* ============================ PATOLOGIA ============================ */
{
id: "p-autoimune", area: "pato", title: "Autoimunidade: bases", sub: "Tolerância, causas, mecanismos de lesão",
html: `
<h3>1. Tolerância imunológica (autotolerância)</h3>
<p>É a capacidade do sistema imune de reconhecer e <b>tolerar</b> os antígenos próprios (self). Existem dois níveis:</p>
<div class="tbl"><table>
<tr><th></th><th>Tolerância central</th><th>Tolerância periférica</th></tr>
<tr><td>Onde</td><td>Órgãos linfoides primários (timo e medula óssea)</td><td>Tecidos periféricos</td></tr>
<tr><td>Linfócito T</td><td><b>Seleção negativa</b> no timo: quem reconhece o self com alta afinidade morre por apoptose (o gene <b>AIRE</b> permite expressar antígenos de tecidos no timo)</td><td>Reconhece autoantígeno <b>sem coestimulação</b> → <b>anergia</b>; ou é suprimido por <b>Treg</b> (FOXP3, IL-10, TGF-β); ou morre por <b>apoptose</b> (Fas/FasL)</td></tr>
<tr><td>Linfócito B</td><td><b>Edição de receptor</b>: B autorreativo tenta trocar o receptor; se não conseguir → apoptose</td><td>Anergia, apoptose</td></tr>
</table></div>
<div class="box key"><b>Definição para escrever na prova</b>Autoimunidade é a falha nos processos de autotolerância, resultando em respostas imunes (celulares e/ou humorais) contra autoantígenos. <b>Autoimunidade ≠ doença autoimune</b>: pode haver autoanticorpo sem doença.</div>

<h3>2. Por que surge? (raramente causa única)</h3>
<p>Resulta da <b>colisão</b> de três coisas: predisposição genética + falha na regulação imune + gatilhos ambientais.</p>
<ul>
<li><b>Genética</b>: aumenta a chance, mas não determina. O <b>HLA</b> responde por cerca de metade do risco (ex.: <b>HLA-B27</b> na espondilite anquilosante). Polimorfismos não-HLA mexem na maquinaria imune: <b>PTPN22, CTLA-4, IL-10</b>. Defeitos monogênicos raros causam síndromes graves: <b>AIRE</b> (falha da seleção tímica), <b>FOXP3</b> (sem Treg), <b>FAS</b> (sem apoptose).</li>
<li><b>Infecções</b>:
 <ul><li><b>Ativação bystander (por espectador)</b>: a inflamação aumenta coestimulação nas APCs e ativa linfócitos autorreativos que estavam quietos.</li>
 <li><b>Mimetismo molecular</b>: antígeno do micróbio é quase idêntico a uma proteína própria (ex.: <b>febre reumática</b> — estreptococo × miocárdio).</li></ul></li>
<li><b>Lesões</b> (inflamação, radiação UV, isquemia, trauma): expõem autoantígenos antes ocultos (sítios imunoprivilegiados) ou geram neoantígenos.</li>
<li><b>Hormônios e estresse</b>: explicam a maior frequência em mulheres (LES ~9:1 na idade reprodutiva).</li>
</ul>

<h3>3. Espectro: órgão-específica × sistêmica</h3>
<div class="tbl"><table>
<tr><th>Órgão-específica</th><th>Sistêmica</th></tr>
<tr><td>Autoantígeno restrito a um tecido. Ex.: <b>Graves, Hashimoto, DM1</b>, miastenia, esclerose múltipla</td><td>Antígenos ubíquos (núcleo) ou imunocomplexos circulantes → vários órgãos. Ex.: <b>LES, AR, Sjögren, esclerodermia</b></td></tr>
</table></div>

<h3>4. Por que são crônicas e autoperpetuantes?</h3>
<ol class="flow"><li>Autoantígeno é persistente (é próprio, nunca é "eliminado")</li><li>A lesão libera novos autoantígenos escondidos</li><li>Estes ativam mais linfócitos autorreativos (<b>espalhamento de epítopos</b>)</li><li>Feedback positivo → surtos e remissões</li></ol>

<h3>5. Como o sistema imune causa a lesão? (hipersensibilidade)</h3>
<div class="tbl"><table>
<tr><th>Tipo</th><th>Mecanismo</th><th>Exemplos do curso</th></tr>
<tr><td><b>II</b> (anticorpo contra célula/matriz)</td><td>Autoanticorpo liga-se a estrutura da célula e <b>bloqueia</b>, <b>superestimula</b> ou <b>destrói</b> (complemento, opsonização, ADCC)</td><td>Graves (estimula receptor TSH), Miastenia (bloqueia AChR), Hashimoto (parcial), anemia hemolítica autoimune, TIH</td></tr>
<tr><td><b>III</b> (imunocomplexos)</td><td>Imunocomplexos circulantes depositam em vasos e glomérulos → ativam complemento → neutrófilos → <b>vasculite / necrose fibrinoide</b></td><td><b>LES</b>, AR (componente)</td></tr>
<tr><td><b>IV</b> (mediada por T)</td><td>Linfócitos T agem diretamente (CD8 citotóxico) ou por citocinas (CD4 Th1/Th17 ativando macrófagos; Th2 na fibrose)</td><td>Hashimoto (principal), AR (componente), Sjögren (Th1), Esclerodermia (Th2), DM1, EM, Crohn, celíaca</td></tr>
</table></div>
<div class="box key"><b>Por que importa</b>Uma mesma doença pode usar mais de um mecanismo, e saber o <b>predominante orienta o tratamento</b>. Princípio terapêutico: "desarmar o sistema imune, sem desproteger" — reduzir o dano tecidual sem zerar a defesa contra infecções.</div>
<div class="box trap"><b>Pegadinha</b>Tipo I (IgE/mastócito) <b>não</b> é mecanismo de doença autoimune clássica — aparece no curso na <b>anafilaxia</b> (choque anafilático).</div>
`},
{
id: "p-les", area: "pato", title: "Lúpus (LES)", sub: "Tipo III, alça de arame, asa de borboleta",
html: `
<div class="box key"><b>Em uma frase</b>Doença autoimune <b>sistêmica</b> mediada por <b>hipersensibilidade tipo III</b>: imunocomplexos (autoanticorpo + antígeno nuclear) depositam em pequenos vasos, ativam complemento e causam inflamação.</div>
<h3>Patogênese passo a passo</h3>
<ol class="flow">
<li>Predisposição (HLA-DR2/DR3, HLA-DQ; <b>deficiência de C1q, C2, C4</b>) + gatilho (<b>luz UV</b>, vírus, fármacos, hormônios)</li>
<li>↑ apoptose + <b>falha na eferocitose</b> (remoção das células apoptóticas)</li>
<li>Antígenos nucleares (DNA, histonas, RNP) acumulam fora da célula → quebra da tolerância</li>
<li>B hiperativos (ajudados por T CD4) produzem <b>FAN, anti-dsDNA, anti-Sm</b>…</li>
<li>Imunocomplexos circulantes depositam (rim, pele, articulação, SNC)</li>
<li>Complemento ativado (<b>C3 e C4 consumidos → baixos</b>), C5a atrai neutrófilos → enzimas e ERO → lesão</li>
<li>Amplificação: Th1/Th17 (IFN-γ, IL-17), plasmócitos de longa vida e <b>IFN tipo I (IFN-α)</b> de células dendríticas plasmocitoides</li>
</ol>
<h3>Autoanticorpos</h3>
<div class="tbl"><table>
<tr><th>Anticorpo</th><th>Característica</th></tr>
<tr><td>FAN (anticorpo antinuclear)</td><td>Muito <b>sensível</b>, pouco específico (triagem)</td></tr>
<tr><td>Anti-dsDNA (DNA nativo)</td><td><b>Específico</b>; ligado à <b>nefrite</b> e à atividade</td></tr>
<tr><td>Anti-Sm (Smith)</td><td><b>Altamente específico</b> (contra ribonucleoproteínas do processamento de RNA)</td></tr>
<tr><td>Anti-RNP, anti-histona, anti-SSA/SSB (Ro/La)</td><td>Outros do LES (anti-histona → lúpus induzido por fármaco; Ro/La também no Sjögren)</td></tr>
<tr><td>Antifosfolipídio / anticoagulante lúpico</td><td>Síndrome antifosfolipídio associada → <b>trombose</b> e perdas fetais</td></tr>
</table></div>
<h3>Morfologia (o que a profa cobra)</h3>
<ul>
<li><b>Vasos</b>: <b>vasculite necrotizante aguda</b> (capilares, pequenas artérias e arteríolas) com <b>necrose fibrinoide</b> (material eosinofílico amorfo). Crônica: espessamento fibroso e estreitamento da luz.</li>
<li><b>Rim</b>: <b>glomerulonefrite proliferativa difusa</b> com depósito maciço <b>subendotelial</b> de imunocomplexos → espessamento circunferencial da parede capilar = lesão em <b>"alça de arame" (wire loop)</b>. Pode evoluir para falência renal.</li>
<li><b>Pele</b>: eritema em <b>"asa de borboleta"</b> (ponte nasal + bochechas, ~50%), piora com o sol (fotossensibilidade). Histologia: <b>degeneração vacuolar das células basais</b> na junção dermoepidérmica. Também urticária, bolhas, úlceras.</li>
</ul>
<div class="box clue"><b>Pistas no caso clínico</b>Mulher jovem (9:1), eritema malar após sol, artralgia, edema/proteinúria/hematúria, FAN+, anti-dsDNA+, <b>C3 e C4 baixos</b>, citopenias. Biópsia renal: alça de arame. Se tiver aborto de repetição ou trombose → pensar em SAF associada.</div>
<div class="box trap"><b>Pegadinhas</b>• Deficiência de componentes iniciais da via clássica (C1q, C2, C4) <b>predispõe</b> ao LES (pior remoção de imunocomplexos e apoptóticos). <br>• Complemento baixo no LES ativo = <b>consumo</b>, não deficiência de produção. <br>• "Anticoagulante lúpico" é <b>pró-trombótico</b> no corpo, apesar de prolongar o TTPa no laboratório.</div>
`},
{
id: "p-ar", area: "pato", title: "Artrite reumatoide", sub: "Tipo III + IV, pannus, anti-CCP",
html: `
<div class="box key"><b>Em uma frase</b>Doença sistêmica com sinovite crônica erosiva; mistura <b>tipo III</b> (imunocomplexos FR/anti-CCP na sinóvia) e <b>tipo IV</b> (Th1/Th17 + macrófagos).</div>
<h3>Patogênese</h3>
<ol class="flow">
<li>Estresse em mucosa: <b>fumo</b> (pulmão), <b>periodontite</b> (<i>Porphyromonas gingivalis</i>), disbiose</li>
<li><b>Citrulinação</b> de proteínas (arginina → citrulina, modificação pós-traducional) → proteína parece "estranha"</li>
<li>APC apresenta via MHC II (<b>HLA-DR4/DR1 = HLA-DRB1</b>, "epítopo compartilhado") a T CD4</li>
<li>Th1 (IFN-γ) e Th17 (IL-17) migram para a sinóvia; T ajuda B</li>
<li>B produz <b>fator reumatoide</b> (IgM contra Fc da IgG) e <b>anti-CCP</b></li>
<li>Vasos sinoviais fenestrados → imunocomplexos na articulação (tipo III) → complemento</li>
<li>Macrófagos e fibroblastos liberam <b>TNF-α, IL-1β, IL-6</b> → proliferação sinovial (pannus), recrutamento de neutrófilos</li>
<li>T ativado e estroma expressam <b>RANKL</b> → liga RANK do pré-osteoclasto → osteoclasto ativo → <b>erosão óssea</b></li>
</ol>
<h3>Morfologia</h3>
<ul>
<li>Sinóvia: (1) hiperplasia e proliferação das células sinoviais (vilosidades); (2) infiltrado de T CD4, B, dendríticas e macrófagos (às vezes folículos); (3) <b>angiogênese</b>; (4) <b>exsudato fibrinopurulento</b>; (5) atividade osteoclástica no osso subcondral → erosões e cistos.</li>
<li>Conjunto = <b>pannus</b> → corrói a cartilagem → <b>anquilose fibrosa</b> → <b>anquilose óssea</b>.</li>
<li><b>Nódulo reumatoide</b> (extra-articular): áreas de atrito (antebraço, cotovelo, occipital, lombossacral); firme, indolor, redondo/oval. Histologia = granuloma necrosante: <b>necrose fibrinoide central</b> + <b>macrófagos em paliçada</b> + linfócitos e plasmócitos.</li>
</ul>
<div class="tbl"><table><tr><th>Marcador</th><th>O que dizer</th></tr>
<tr><td>Anti-CCP</td><td><b>Específico</b> da AR</td></tr>
<tr><td>Fator reumatoide</td><td>IgM anti-IgG; <b>não</b> é específico (aparece em outras doenças e idosos)</td></tr></table></div>
<div class="box clue"><b>Pistas no caso</b>Mulher, tabagista, poliartrite simétrica de pequenas articulações das mãos, rigidez matinal prolongada, nódulos no cotovelo, anti-CCP+. Anemia de doença crônica pode acompanhar.</div>
<div class="box trap"><b>Pegadinhas</b>• Erosão óssea = <b>RANKL/osteoclasto</b>, não o anticorpo diretamente. <br>• Terapias anti-TNF fazem sentido porque TNF é citocina central.</div>
`},
{
id: "p-sjogren-esclero", area: "pato", title: "Sjögren e esclerodermia", sub: "Tipo IV Th1 × tipo IV Th2",
html: `
<h3>Síndrome de Sjögren — tipo IV (Th1)</h3>
<p>Destruição imunomediada das <b>glândulas lacrimais e salivares</b> (glândulas exócrinas).</p>
<ol class="flow">
<li>Gatilho viral → ambiente rico em <b>IFN-γ</b></li>
<li>Células epiteliais da glândula passam a expressar <b>MHC classe II</b></li>
<li>Célula estressada faz autofagia e expõe autoantígenos; vizinhas fagocitam restos apoptóticos e apresentam a T</li>
<li>Quimiocina <b>CXCL13</b> atrai T citotóxicos e B</li>
<li>Infiltrado linfocítico com <b>folículos ectópicos</b> → destruição dos ácinos</li>
</ol>
<ul>
<li>Clínica: <b>síndrome sicca</b> (olho seco = xeroftalmia; boca seca = xerostomia); extraglandular em ~25%.</li>
<li>Ductos sobreviventes proliferam → <b>ilhotas epimioepiteliais</b>.</li>
<li><b>Risco até 40× maior de linfoma de células B</b> (estímulo crônico de B).</li>
</ul>
<h3>Esclerodermia (esclerose sistêmica) — tipo IV (Th2)</h3>
<div class="box key"><b>Ideia central</b>A marca não é destruição, é <b>excesso de cicatrização (fibrose)</b>. O sistema que deveria consertar o vaso não para e fibrosa o tecido.</div>
<ol class="flow">
<li>Lesão endotelial crônica (toxinas, isquemia, idiopática) → apoptose endotelial</li>
<li>Desvio Th1 (destrutivo) → <b>Th2</b> (cicatrização)</li>
<li>Th2 libera <b>IL-4 e IL-13</b> → macrófagos <b>M2</b> (ativação alternativa)</li>
<li>M2 produz <b>TGF-β</b> → fibroblastos hiperativos → <b>miofibroblastos</b></li>
<li>Deposição excessiva de colágeno</li>
</ol>
<p><b>Autoanticorpos</b>: <b>anti-topoisomerase I (anti-Scl-70)</b> e <b>anticentrômero</b>.</p>
<h4>Morfologia e órgãos</h4>
<ul>
<li><b>Pele</b>: epiderme atrófica, apagamento das cristas; derme com faixas espessas, <b>avasculares, eosinofílicas</b> de colágeno denso hialinizado; perda de anexos (folículos, glândulas sudoríparas, tecido adiposo). Clínica: <b>esclerodactilia</b> (pele tensa, brilhante, endurecida).</li>
<li><b>Vasos</b>: vasculopatia obliterativa com hiperplasia concêntrica da íntima em <b>"casca de cebola"</b> → isquemia (úlceras digitais, crise renal).</li>
<li><b>Fenômeno de Raynaud</b>: ~90% (vasculopatia digital).</li>
<li><b>TGI</b> (~90%): atrofia e fibrose da muscular, sobretudo <b>esôfago distal</b> (2/3 inferiores) → refluxo, Barrett, estenose, má absorção.</li>
<li><b>Rim</b>: lesão das artérias interlobulares; ~20% hipertensão maligna (<b>crise renal esclerodérmica</b>); <b>sem alteração glomerular específica</b>.</li>
<li><b>Pulmão</b>: fibrose intersticial e hipertensão pulmonar → <b>hoje a principal causa de morte</b>.</li>
<li><b>Coração</b>: pericardite e fibrose miocárdica.</li>
</ul>
<div class="box trap"><b>Pegadinha</b>Sjögren = tipo IV <b>Th1</b> (destrói glândula). Esclerodermia = tipo IV <b>Th2</b> (IL-4/IL-13 → M2 → TGF-β → fibrose). Mesma "letra" (IV), padrões opostos.</div>
`},
{
id: "x-tireoide", area: "int", title: "Hashimoto e Graves", sub: "Patologia + imunologia da tireoide",
html: `
<h3>Fisiologia rápida (aula da Profa Karina)</h3>
<p>Hipotálamo → <b>TRH</b> → hipófise → <b>TSH</b> → tireoide → <b>T3 e T4</b> (feedback negativo). A célula folicular produz <b>tireoglobulina (Tg)</b> (molde/estoque), capta iodo, e a <b>tireoperoxidase (TPO)</b> faz a iodação da Tg, gerando T3/T4.</p>
<h3>Tireoidite de Hashimoto</h3>
<div class="box key"><b>Mecanismo</b>Principalmente <b>tipo IV</b> (T CD4 Th1/Th17 + T CD8) + participação de autoanticorpos (<b>tipo II</b>: anti-TPO e anti-Tg, via complemento e ADCC). Resultado: destruição progressiva → <b>hipotireoidismo</b>.</div>
<ol class="flow">
<li>Genética (HLA-DR3, HLA-DR5, CTLA-4) + gatilho (infecção viral, <b>excesso de iodo</b>, estresse, sexo feminino)</li>
<li>Quebra da tolerância (anormalidade de Treg ou exposição de antígenos sequestrados)</li>
<li>IFN-γ faz o tireócito expressar <b>MHC II</b> e induz autofagia → apresenta antígenos próprios ao T CD4</li>
<li>Lesão por 3 vias: <b>(1)</b> CD8 citotóxico mata células foliculares; <b>(2)</b> Th1 → IFN-γ → macrófagos; <b>(3)</b> <b>ADCC</b>: anti-TPO/anti-Tg + NK via receptor Fc</li>
<li>↓ T3/T4 → ↑ TRH e ↑ TSH</li>
</ol>
<p class="small">Nota do resumo: o slide mantém as 3 vias; o Robbins dá menos peso à ADCC. Para a prova, cite as três.</p>
<ul>
<li><b>Anti-TPO</b> é o mais comum e sensível; anti-Tg também. O dano principal é <b>celular</b> (T).</li>
<li><b>Macroscopia</b>: tireoide <b>difusamente aumentada</b>, cápsula íntegra, bem delimitada; corte pálido, castanho-amarelado, firme, levemente nodular.</li>
<li><b>Microscopia</b>: infiltrado mononuclear extenso (linfócitos, plasmócitos), <b>centros germinativos bem desenvolvidos</b>, folículos atróficos revestidos por <b>células de Hürthle</b> (citoplasma granular eosinofílico abundante = metaplasia do epitélio cuboide baixo). Fibrose intersticial que <b>não ultrapassa a cápsula</b> (≠ tireoidite de Riedel).</li>
<li><b>Clínica</b>: aumento <b>indolor e simétrico</b> em mulher de meia-idade, hipotireoidismo gradual. Às vezes nodular (suspeita de neoplasia).</li>
<li><b>Hashitoxicose</b>: tireotoxicose transitória inicial por ruptura de folículos → T4/T3 livres ↑, TSH ↓, <b>captação de iodo radioativo ↓</b>. Depois T4/T3 caem e TSH sobe.</li>
</ul>
<h3>Doença de Graves</h3>
<div class="box key"><b>Mecanismo</b><b>Tipo II estimulador</b>: IgG <b>TSI/TRAb</b> se liga ao receptor de TSH e imita o TSH (ativa adenilato ciclase) → hipertireoidismo. Como o estímulo não vem do TSH, <b>não obedece ao feedback</b>: o anticorpo é o "impostor" que deixa o receptor "ligado no ON".</div>
<ul>
<li>Causa <b>mais comum de hipertireoidismo endógeno</b>. Mulheres jovens e de meia-idade. Genes: HLA-DR3, CTLA-4, PTPN22; gatilhos: infecção, estresse, <b>tabagismo</b>, hormônios.</li>
<li><b>Tríade</b>: (1) hipertireoidismo com aumento difuso; (2) <b>oftalmopatia infiltrativa com exoftalmia</b>; (3) <b>dermopatia infiltrativa</b> (mixedema pré-tibial, minoria).</li>
<li>Também há anticorpos <b>bloqueadores</b> do receptor (alguns evoluem para hipofunção).</li>
<li><b>Oftalmopatia</b>: tecido retro-orbitário tem receptor de TSH; Th CD4 → citocinas → fibroblastos produzem <b>glicosaminoglicanos</b>. 4 motivos da exoftalmia: (1) infiltrado mononuclear (T); (2) inflamação/edema dos músculos extraoculares; (3) acúmulo de GAG hidrofílicos (ácido hialurônico, condroitina); (4) infiltração gordurosa (↑ adipócitos). Pode progredir mesmo com o hipertireoidismo tratado.</li>
<li><b>Macroscopia</b>: aumento simétrico difuso (hipertrofia + hiperplasia), pode passar de 80 g; corte <b>carnudo, macio, vermelho-vivo</b> (lembra músculo).</li>
<li><b>Microscopia</b>: células foliculares altas e aglomeradas formando <b>papilas</b> para a luz; coloide escasso; infiltrado linfoide (T, B esparsos, plasmócitos), centros germinativos. Iodo pré-operatório → involução e acúmulo de coloide; propiltiouracila → exacerba hiperplasia (↑ TSH).</li>
<li>Fora da tireoide: hiperplasia linfoide (timo em jovens), coração hipertrofiado/isquêmico; derme espessada (GAG + linfócitos).</li>
<li>Clínica: sopro (↑ fluxo), olhar fixo e retardo palpebral (simpático), taquicardia, tremor, sudorese, perda de peso.</li>
</ul>
<div class="tbl"><table>
<tr><th></th><th>Hashimoto</th><th>Graves</th></tr>
<tr><td>Hipersensibilidade</td><td>IV (principal) + II</td><td>II (estimuladora)</td></tr>
<tr><td>Anticorpo-chave</td><td>Anti-TPO, anti-Tg</td><td>TSI / TRAb (anti-receptor de TSH)</td></tr>
<tr><td>Função</td><td>Hipo (pode ter hashitoxicose)</td><td>Hiper</td></tr>
<tr><td>TSH</td><td>↑</td><td>↓ (suprimido)</td></tr>
<tr><td>Captação de iodo</td><td>↓</td><td>↑ difusa</td></tr>
<tr><td>Histologia</td><td>Linfócitos, centros germinativos, células de Hürthle, atrofia</td><td>Hiperplasia papilar, coloide escasso, centros germinativos</td></tr>
<tr><td>Extra-tireoide</td><td>—</td><td>Exoftalmia, mixedema pré-tibial</td></tr>
</table></div>
<div class="box trap"><b>Pegadinha integrada</b>Hipertireoidismo → <b>fibrilação atrial</b> → estase no átrio esquerdo → trombo → <b>embolia sistêmica</b> (cérebro, rim, baço).</div>
`},
{
id: "p-edema", area: "pato", title: "Edema e congestão", sub: "Starling, transudato × exsudato, hiperemia",
html: `
<h3>Distúrbio hemodinâmico</h3>
<p>Toda alteração do volume, distribuição ou composição do sangue/líquidos, ou do fluxo. O equilíbrio depende de 4 fatores: <b>pressão hidrostática, pressão oncótica, permeabilidade vascular, integridade da parede</b>. Se falha: o líquido sai (edema/efusão), o sangue se acumula (hiperemia/congestão), o sangue sai (hemorragia) ou coagula fora de hora (trombose).</p>
<h3>Equilíbrio de Starling</h3>
<ul>
<li><b>Hidrostática</b> (empurra para fora): força do coração e do volume.</li>
<li><b>Oncótica</b> (puxa para dentro): proteínas plasmáticas, sobretudo <b>albumina</b>.</li>
<li>Extremidade <b>arterial</b>: hidrostática > oncótica → filtração. Extremidade <b>venular</b>: oncótica domina → reabsorção.</li>
<li>Sobra <b>10–15%</b> no interstício → recolhido pelos <b>linfáticos</b> (ducto torácico). Linfático = 3ª peça.</li>
</ul>
<div class="box key"><b>Definições</b><b>Edema</b>: acúmulo anormal de líquido no <b>interstício</b>. <b>Efusão</b>: líquido em cavidade — derrame pleural, derrame pericárdico, <b>ascite</b> (peritoneal). Generalizado e grave = <b>anasarca</b>.</div>
<h3>Os 5 mecanismos do edema</h3>
<div class="tbl"><table>
<tr><th>Mecanismo</th><th>Exemplos</th><th>Característica</th></tr>
<tr><td>1. ↑ Pressão hidrostática</td><td>Local: <b>TVP</b> (edema assimétrico). Sistêmica: <b>ICC</b> — esquerda → edema agudo de pulmão; direita → estase jugular, hepatomegalia, edema periférico (acamado: dorso)</td><td>Transudato</td></tr>
<tr><td>2. ↓ Pressão oncótica</td><td>Falta de produção (<b>cirrose</b>), perda (<b>síndrome nefrótica</b>), falta de matéria-prima (<b>kwashiorkor</b>)</td><td>Generalizado (anasarca); transudato</td></tr>
<tr><td>3. Retenção renal de Na⁺ e água</td><td>ICC: ↓ débito → rim "acha" hipovolemia → <b>SRAA</b> → aldosterona → retém Na⁺/água → ↑ volume → ↑ hidrostática (ciclo vicioso)</td><td>Agrava o edema da IC</td></tr>
<tr><td>4. Obstrução linfática</td><td>Esvaziamento ganglionar (câncer de mama), <b>filariose</b> (elefantíase), neoplasia, cirurgia, radiação</td><td><b>Linfedema</b>: firme, rico em proteína, <b>sem cacifo</b></td></tr>
<tr><td>5. ↑ Permeabilidade</td><td>Inflamação: mediadores retraem endotélio</td><td><b>Exsudato</b></td></tr>
</table></div>
<h3>Transudato × exsudato</h3>
<div class="tbl"><table>
<tr><th></th><th>Transudato</th><th>Exsudato</th></tr>
<tr><td>Causa</td><td>Desequilíbrio de pressões, parede íntegra (ICC, nefrótica, cirrose)</td><td>Inflamação ↑ permeabilidade (pneumonia, peritonite, pleurite)</td></tr>
<tr><td>Aspecto</td><td>Claro, aquoso</td><td>Turvo</td></tr>
<tr><td>Proteína</td><td>Baixa</td><td>Alta</td></tr>
<tr><td>Densidade</td><td><b>&lt; 1,012</b></td><td><b>&gt; 1,020</b></td></tr>
<tr><td>Células</td><td>Poucas</td><td>Ricas em leucócitos</td></tr>
</table></div>
<h3>Edema por órgão</h3>
<ul>
<li><b>Subcutâneo</b>: segue a gravidade (MMII), <b>sinal do cacifo</b>; cardíaco ou renal.</li>
<li><b>Pulmão</b>: 2–3× mais pesado, líquido espumoso, hipoxemia; IVE.</li>
<li><b>Cérebro</b>: crânio não expande → sulcos estreitos, giros alargados → <b>herniação</b> pelo forame magno (fatal).</li>
</ul>
<h3>Cirrose: o exemplo que junta tudo</h3>
<ol class="flow"><li>Fibrose → hipertensão portal (↑ hidrostática)</li><li>Fígado produz menos albumina (↓ oncótica)</li><li>Ascite (transudato, pobre em Ig e complemento)</li><li>Congestão afrouxa o epitélio intestinal → <i>E. coli</i> translocam</li><li><b>Peritonite bacteriana espontânea</b></li></ol>
<h3>Hiperemia × congestão</h3>
<div class="tbl"><table>
<tr><th></th><th>Hiperemia (ativa)</th><th>Congestão (passiva)</th></tr>
<tr><td>Mecanismo</td><td>Dilatação arteriolar → entra mais sangue</td><td>Retorno venoso prejudicado → sangue não sai</td></tr>
<tr><td>Sangue</td><td>Oxigenado</td><td>Desoxigenado</td></tr>
<tr><td>Aspecto</td><td>Vermelho vivo, quente (rubor, calor)</td><td>Azulado, frio, <b>cianótico</b></td></tr>
<tr><td>Exemplos</td><td>Exercício (fisiológica), inflamação (patológica)</td><td>TVP (local), insuficiência cardíaca (sistêmica)</td></tr>
<tr><td>Edema associado</td><td>Exsudato</td><td>Transudato</td></tr>
</table></div>
<h4>Congestão crônica</h4>
<ul>
<li><b>Pulmão (falência do VE)</b>: hemácias extravasam para alvéolos → macrófagos fagocitam → hemossiderina = <b>células da insuficiência cardíaca</b>; septos espessados e fibrosados → <b>induração marrom</b>.</li>
<li><b>Fígado (falência do VD)</b>: região <b>centrolobular</b> (mais distante do O₂) sofre necrose hemorrágica; periportal só esteatose → <b>fígado em noz-moscada</b>.</li>
</ul>
`},
{
id: "p-hemorragia", area: "pato", title: "Hemorragia e hemostasia", sub: "Petéquia a hematoma, tampão, cascata",
html: `
<h3>Hemorragia</h3>
<p>Saída de sangue do espaço cardiovascular por <b>ruptura</b> ou <b>↑ permeabilidade</b>. Externa ou interna (inclui acúmulo oculto no interstício e cavidades).</p>
<ul><li><b>Dano estrutural</b>: trauma, aterosclerose/aneurisma (enfraquecem a média), invasão por neoplasia ou inflamação.</li>
<li><b>Falha da hemostasia (diáteses)</b>: plaquetopenia, hemofilias, deficiência de vitamina K.</li></ul>
<h4>Nomenclatura</h4>
<div class="tbl"><table>
<tr><th>Lesão</th><th>Tamanho</th><th>Causas</th></tr>
<tr><td><b>Petéquias</b></td><td>1–2 mm</td><td>↑ pressão local, <b>trombocitopenia</b> grave, defeito plaquetário (hemostasia primária)</td></tr>
<tr><td><b>Púrpuras</b></td><td>3–5 mm</td><td>Mesmas + vasculites, fragilidade vascular (escorbuto — sem vitamina C, sem colágeno; amiloidose)</td></tr>
<tr><td><b>Equimoses</b></td><td>1–2 cm ou mais</td><td>Trauma; mancha plana que muda de cor</td></tr>
<tr><td><b>Hematoma</b></td><td>Coleção com volume</td><td>Palpável; de insignificante a fatal (epidural/subdural → herniação)</td></tr>
</table></div>
<p>Cavitárias (prefixo hemo-): <b>hemotórax</b>, <b>hemopericárdio</b> (→ <b>tamponamento</b>, impede enchimento diastólico, letal), <b>hemoperitônio</b>, <b>hemartrose</b>.</p>
<div class="box key"><b>Por que a equimose muda de cor?</b>Macrófagos fagocitam hemácias: Hb desoxigenada (roxo) → heme-oxigenase → <b>biliverdina</b> (verde) → <b>bilirrubina</b> → ferro armazenado como <b>hemossiderina</b> (amarelo-acastanhado). A cor estima a idade da lesão.</div>
<h4>Gravidade depende de 3 fatores</h4>
<ol><li><b>Volume e velocidade</b>: perder <b>&gt;20%</b> → choque hipovolêmico.</li><li><b>Localização</b>: pouco sangue no crânio mata (↑ PIC, herniação).</li><li><b>Destino do ferro</b>: perda externa crônica → <b>anemia ferropriva</b>; sangue retido nos tecidos → ferro reciclado.</li></ol>
<h3>Hemostasia</h3>
<p>Mantém o sangue fluido nos vasos normais e forma tampão rápido e localizado na lesão. Pouca → hemorragia; demais → trombose. Tríade: <b>endotélio, plaquetas, proteínas da coagulação</b>.</p>
<ol class="flow">
<li><b>Vasoconstrição</b> (segundos): reflexo neurogênico + <b>endotelina</b></li>
<li><b>Hemostasia primária</b>: lesão expõe colágeno e <b>FvW</b> → plaqueta adere via <b>GpIb</b> → ativa, muda forma → libera <b>ADP e TXA2</b> → <b>fibrinogênio</b> liga <b>GpIIb/IIIa</b> e agrega → tampão primário (frouxo)</li>
<li><b>Hemostasia secundária</b>: <b>fator tecidual (III)</b> + fator VII → … → protrombina → <b>trombina (IIa)</b> → fibrinogênio vira <b>fibrina</b>; trombina ativa <b>XIII</b> (ligações cruzadas)</li>
<li><b>Contrarregulação e fibrinólise</b>: endotélio vizinho libera <b>NO e prostaciclina</b>; trombina + <b>trombomodulina</b> ativa <b>proteína C</b>; <b>t-PA</b> converte plasminogênio em <b>plasmina</b> → degrada fibrina → <b>D-dímero</b></li>
</ol>
<div class="box clue"><b>Raciocínio clínico</b>Falha <b>primária</b> (plaqueta/FvW): sangramento <b>imediato</b>, mucocutâneo, petéquias. Falha <b>secundária</b> (fatores, ex.: hemofilia): tampão segura no começo, mas o sangramento <b>volta depois</b>; hemartrose, hematomas profundos.</div>
`},
{
id: "p-trombose", area: "pato", title: "Trombose e trombofilias", sub: "Virchow, arterial × venosa, TIH, SAF",
html: `
<div class="box key"><b>Definição</b>Trombose: formação de massa sólida de sangue <b>dentro</b> do sistema cardiovascular, <b>em vida</b>. Adere à parede e pode reduzir/interromper o fluxo.</div>
<p>Consequências: oclusão local → isquemia/infarto; obstrução venosa → edema e congestão; desprendimento → <b>êmbolo</b>.</p>
<h3>Trombo × coágulo post-mortem</h3>
<div class="tbl"><table>
<tr><th>Trombo</th><th>Coágulo post-mortem</th></tr>
<tr><td>Aderido à parede, friável</td><td>Não aderido, gelatinoso</td></tr>
<tr><td><b>Linhas de Zahn</b>: camadas claras (plaquetas + fibrina) alternando com escuras (hemácias)</td><td>"Gordura de galinha" (parte amarela) e "geleia de groselha" (parte vermelha)</td></tr>
</table></div>
<h3>Tríade de Virchow</h3>
<ol>
<li><b>Lesão endotelial</b>: expõe matriz, <b>FvW</b> (adesão) e <b>fator tecidual</b> (cascata). Típica de trombo <b>arterial e cardíaco</b>. Causas: aterosclerose, hipertensão, inflamação, trauma, hipercolesterolemia, <b>cigarro</b>. Pode ser só <b>ativação</b> (sem ruptura).</li>
<li><b>Alteração do fluxo</b>: <b>turbulência</b> (cisalhamento ativa endotélio; arterial/cardíaca: estenose, aneurisma, valvopatia) e <b>estase</b> (fatores ativados não são diluídos; <b>principal fator da trombose venosa</b>: imobilização, pós-operatório, IC). Fluxo laminar mantém células no centro; turbulência/estase desfazem isso.</li>
<li><b>Hipercoagulabilidade</b> (trombofilia): hereditária (fator V de Leiden) ou adquirida (câncer, gestação, anticoncepcional).</li>
</ol>
<h4>Inflamação ativa o endotélio → estado pró-coagulante</h4>
<ul><li>Pró-coagulante: ↓ <b>trombomodulina</b>, ↓ <b>proteína C</b>, ↓ inibidor da via do fator tecidual → ↑ trombina.</li>
<li>Antifibrinolítico: ↑ <b>PAI</b>, ↓ <b>t-PA</b>.</li></ul>
<h3>Trombofilias</h3>
<div class="tbl"><table>
<tr><th>Hereditárias</th><th>Detalhe</th></tr>
<tr><td><b>Fator V de Leiden</b></td><td>Fator V resistente à inativação pela proteína C; risco 5–50×; 2–15% dos brancos</td></tr>
<tr><td><b>Protrombina G20210A</b></td><td>Troca de 1 nucleotídeo; ↑ 30–50% protrombina; ~3× risco venoso; 1–2% da população</td></tr>
<tr><td>Def. <b>antitrombina III, proteína C, proteína S</b></td><td>Trombose venosa recorrente desde a adolescência/adulto jovem</td></tr>
<tr><td><b>Hiper-homocisteinemia</b></td><td>Hereditária ou por falta de <b>B6, B12, folato</b>: estresse oxidativo, inativa NO, inibe trombomodulina e fibrinólise</td></tr>
</table></div>
<p><b>Adquiridas</b> (multifatoriais): imobilização, IAM, <b>fibrilação atrial</b>, cirurgia, fratura, queimadura, <b>câncer</b>, próteses valvares, CID, <b>gravidez/pós-parto</b>, <b>contraceptivo oral</b>, tabagismo, síndrome nefrótica, <b>anemia falciforme</b>, miocardiopatia, TIH, SAF.</p>
<h4>TIH — trombocitopenia induzida por heparina</h4>
<p>5–10 dias após <b>heparina não fracionada</b>: heparina + <b>fator plaquetário 4 (PF4)</b> → anticorpos <b>IgG</b> → ativam plaquetas → consumo (plaquetopenia) <b>mas</b> ativação libera pró-coagulantes → <b>principal complicação é TROMBOSE</b> (necrose de pele, gangrena, AVE, IAM).</p>
<h4>SAF — síndrome do anticorpo antifosfolipídio</h4>
<p>Autoimune. Anticorpos contra complexos proteína-fosfolipídio (sobretudo <b>β2-glicoproteína I</b>) ativam endotélio, plaquetas, células inflamatórias e complemento → trombose <b>arterial ou venosa</b> + complicações gestacionais (<b>perdas fetais recorrentes</b>, insuficiência placentária). <b>Anticoagulante lúpico</b>: pró-trombótico no corpo, prolonga TTPa no laboratório.</p>
<h3>Evolução e destino do trombo</h3>
<p>Iniciação → propagação → embolização. Destinos: <b>resolução</b> (fibrinólise, se recente), <b>propagação</b>, <b>embolização</b>, <b>organização</b> (tecido conjuntivo + recanalização, fluxo não volta 100%). Trombo infectado → abscesso, aneurisma micótico.</p>
<h3>Arterial × venosa</h3>
<div class="tbl"><table>
<tr><th></th><th>Arterial</th><th>Venosa</th></tr>
<tr><td>Fluxo</td><td>Rápido; turbulência e lesão endotelial</td><td>Lento; estase</td></tr>
<tr><td>Composição</td><td>Plaquetas e fibrina (branco)</td><td>Fibrina e hemácias (vermelho / de estase)</td></tr>
<tr><td>Fatores</td><td>Aterosclerose, ruptura de placa</td><td>Imobilização, cirurgia, câncer, gestação, hipercoagulabilidade</td></tr>
<tr><td>Efeito</td><td>↓ fluxo distal, isquemia, infarto</td><td>Obstrução do retorno, edema, dor</td></tr>
<tr><td>Complicação típica</td><td>IAM (coronária), AVC</td><td><b>Embolia pulmonar</b> a partir de TVP</td></tr>
</table></div>
<p><b>Trombo mural</b>: IAM (contração discinética + lesão endocárdica), FA → embolia sistêmica para <b>cérebro, rins, baço</b> e membros inferiores.</p>
`},
{
id: "p-embolia", area: "pato", title: "Embolia e CID", sub: "TEP, gordura, gás, líquido amniótico",
html: `
<div class="box key"><b>Êmbolo</b>Massa intravascular solta (sólida, líquida ou gasosa) carregada pelo sangue até longe da origem. A grande maioria é <b>tromboêmbolo</b>.</div>
<h3>Embolia pulmonar</h3>
<p>Trajeto: veia da perna → ilíaca → <b>cava inferior → átrio direito → ventrículo direito → artéria pulmonar</b>. O pulmão é o primeiro leito capilar após o coração direito.</p>
<p>Efeitos: ↑ resistência pulmonar → <b>sobrecarga do VD</b> (cor pulmonale agudo) → ↓ oxigenação. Clínica: <b>dispneia súbita, taquicardia</b>, dor torácica. Classificação: <b>TEP</b> (trombo, de TVP) × <b>não trombótica</b> (gordura, gás, líquido amniótico).</p>
<div class="box clue"><b>Caso clássico da aula</b>Pós-operatório, edema unilateral e dor na panturrilha (TVP). Horas depois: dispneia súbita e taquicardia → <b>tromboembolia pulmonar</b>.</div>
<div class="tbl"><table>
<tr><th>Tipo</th><th>Quando</th><th>Clínica / detalhes</th></tr>
<tr><td><b>Gordurosa</b></td><td>Fratura de ossos longos, cirurgia ortopédica, lipoaspiração, lipoenxertia glútea</td><td><b>24–72 h</b>: insuficiência respiratória, alterações neurológicas, <b>petéquias</b>. Êmbolos de medula causam lesão endotelial e liberam ácidos graxos livres</td></tr>
<tr><td><b>Gasosa</b></td><td>Trauma, cateteres, descompressão (mergulho)</td><td>Dispneia, dor torácica, alteração neurológica, colapso. Conduta: <b>O₂ 100%, decúbito lateral esquerdo, câmara hiperbárica</b>. Avião: esperar 12 h após 1 mergulho, 18–24 h após vários</td></tr>
<tr><td><b>Líquido amniótico</b></td><td>Trabalho de parto/logo após; lesão de vasos uterinos</td><td>Insuficiência respiratória súbita, hipóxia, hipotensão, coagulopatia/hemorragia; células escamosas fetais, lanugo, mucina na circulação materna; <b>CID característica</b></td></tr>
<tr><td><b>Sistêmica (arterial)</b></td><td>Trombo mural (IAM, FA), aorta</td><td>Cérebro, rins, baço, MMII → isquemia/infarto</td></tr>
</table></div>
<h3>CID — coagulação intravascular disseminada</h3>
<ul>
<li>Trombose disseminada na <b>microcirculação</b>; não é doença, é <b>complicação</b> de condições com ativação sistêmica da trombina (sepse, embolia amniótica, trauma, câncer).</li>
<li>Microtrombos → disfunção de cérebro, pulmão, coração, rins.</li>
<li>Consome plaquetas e fatores (<b>coagulopatia de consumo</b>) e ativa fibrinólise → <b>trombose E hemorragia ao mesmo tempo</b> (AVE hemorrágico, choque hipovolêmico).</li>
<li>Histologia: pequenas massas homogêneas eosinofílicas (plaquetas + fibrina) nos capilares.</li>
</ul>
`},
{
id: "p-infarto", area: "pato", title: "Isquemia e infarto", sub: "Branco × vermelho, necrose coagulativa",
html: `
<h3>Isquemia</h3>
<p>Redução/interrupção do fluxo por obstrução ou congestão → <b>hipóxia</b> → déficit de nutrientes → <b>necrose</b>.</p>
<ul><li><b>Mecânicas</b>: trombo/êmbolo, aterosclerose, compressão externa (massa, edema).</li>
<li><b>Funcionais</b>: espasmo, hipotensão, problema da Hb/oxigenação (<b>anemia, CO</b>), redistribuição do fluxo (choque).</li></ul>
<p>Espectro: leve (sonolência pós-prandial, hiperemia digestiva) → intensa (atrofia, fibrose, ex.: atrofia cerebral pós-AVC) → letal (necrose, infarto, gangrena).</p>
<h3>Gravidade (isquemia e infarto)</h3>
<div class="tbl"><table>
<tr><th>Fator</th><th>Explicação</th></tr>
<tr><td>Anatomia vascular</td><td><b>Circulação terminal</b> (rim, baço) → infarto inevitável; <b>dupla</b> (pulmão, fígado) → um vaso compensa</td></tr>
<tr><td>Velocidade</td><td>Lenta permite colaterais; súbita não</td></tr>
<tr><td>Vulnerabilidade</td><td><b>Neurônio 3–4 min</b>; <b>miócito 20–30 min</b>; fibroblasto horas</td></tr>
<tr><td>Hipoxemia</td><td>Multiplicador (anemia, insuficiência respiratória)</td></tr>
</table></div>
<h3>Infarto</h3>
<p>Área localizada de <b>necrose isquêmica</b> por obstrução arterial (ou, menos, venosa). Fluxo normal → trombo → ↓ O₂ → isquemia (reversível) → infarto (irreversível). Ex.: IAM = ruptura de placa → trombo → oclusão coronariana aguda.</p>
<ul><li><b>Trombose arterial</b>: nasce e obstrui no mesmo lugar (placa rota). <b>Embolia arterial</b>: viaja (geralmente de câmaras esquerdas).</li>
<li><b>Venoso</b>: em geral só congestão (colaterais). Exceção: órgão com <b>veia eferente única</b> (testículo, ovário) — <b>torção</b> → infarto hemorrágico.</li></ul>
<h3>Classificação (2 critérios independentes)</h3>
<div class="tbl"><table>
<tr><th>Vermelho (hemorrágico)</th><th>Branco (anêmico)</th></tr>
<tr><td>Sangue se acumula na área necrótica (não salva o tecido). 5 caminhos: <b>oclusão venosa</b> (torção testicular), <b>tecido frouxo/esponjoso</b> (pulmão), <b>circulação dupla</b> (pulmão, intestino), <b>congestão prévia</b>, <b>reperfusão</b> (angioplastia/trombólise)</td><td>Oclusão <b>arterial</b> + órgão <b>sólido/compacto</b> + circulação <b>terminal</b>. Pálido, bem delimitado, em cunha</td></tr>
<tr><td>Pulmão, intestino delgado, testículo, ovário</td><td><b>Coração, baço, rim</b></td></tr>
</table></div>
<p><b>Séptico</b>: êmbolo infectado (vegetação de <b>endocardite</b>) ou infecção secundária → <b>abscesso</b>. Alerta: endocardite + dor súbita no flanco ou hipocôndrio esquerdo → infarto séptico renal/esplênico.</p>
<h3>Histologia e reparo</h3>
<ul>
<li>Maioria: <b>necrose coagulativa</b> — proteínas e enzimas desnaturadas, arquitetura preservada, "fantasmas" celulares sem núcleo.</li>
<li>Sequência: morte com estroma preservado → inflamação (neutrófilos) nas margens em horas → remoção por leucócitos → <b>tecido de granulação</b> (macrófagos <b>M2 → TGF-β</b> → fibroblastos → colágeno) → <b>cicatriz fibrosa</b>.</li>
<li><b>Miocárdio</b>: minutos-horas nada visível; necrose coagulativa em <b>4–12 h</b>; macroscopia só após <b>18–24 h</b>; inflamação aguda nas margens em 1–2 dias; reparo em dias a semanas; cura por cicatriz.</li>
<li><b>SNC = necrose liquefativa</b>: pouco estroma, muita enzima (micróglia, neutrófilos), muito lipídio (mielina) → cavitação; <b>sem fibrose</b>, cicatriz <b>glial</b> (astrócitos = gliose).</li>
</ul>
<p class="small">Epidemiologia: IAM é a principal causa de morbimortalidade no Brasil e no mundo; ~300 mil casos/ano no Brasil, letalidade ~30%.</p>
`},
{
id: "p-choque", area: "pato", title: "Choque", sub: "Tipos, estágios, NTA, DAD",
html: `
<div class="box key"><b>Definição</b>Estado de <b>hipoperfusão sistêmica</b>: fluxo insuficiente para as demandas dos tecidos vitais → hipóxia celular generalizada → falência de múltiplos órgãos. (Diferente do infarto, que é localizado.)</div>
<ol class="flow"><li>↓ Oferta de O₂ (débito cardíaco × conteúdo arterial de O₂)</li><li>↓ fosforilação oxidativa, ATP insuficiente</li><li>Glicólise anaeróbica → <b>ácido lático</b></li><li>Lesão celular isquêmica (reversível → ponto de não retorno)</li></ol>
<div class="box trap"><b>Hipotensão não é sinônimo de choque</b>Pode haver choque antes da hipotensão. Sinais precoces de má perfusão: <b>extremidades frias, enchimento capilar lento, alteração de consciência, oligúria, lactato crescente</b>.</div>
<h3>Tipos</h3>
<div class="tbl"><table>
<tr><th>Tipo</th><th>Problema</th><th>Causas</th><th>Clínica distintiva</th></tr>
<tr><td><b>Cardiogênico</b></td><td>Falência da bomba</td><td><b>IAM</b> (mais comum), complicações mecânicas, arritmias</td><td>Pele fria, pegajosa + <b>turgência jugular, B3, congestão pulmonar</b></td></tr>
<tr><td><b>Hipovolêmico</b></td><td>Falta de volume</td><td>Hemorragia, diarreia grave, queimadura</td><td>Simpático (taquicardia, vasoconstrição), SRAA + ADH; sede, palidez, pele fria → hipotensão, oligúria, confusão; <b>jugular colabada</b></td></tr>
<tr><td><b>Distributivo</b></td><td>Vasodilatação; volume normal em leito expandido</td><td><b>Séptico</b> (mais prevalente), <b>anafilático</b>, <b>neurogênico</b></td><td>Ver abaixo</td></tr>
</table></div>
<h4>Os três distributivos</h4>
<ul>
<li><b>Séptico</b>: infecção grave → resposta inflamatória sistêmica descontrolada ("tempestade de citocinas") → vasodilatação + perda da barreira capilar. Pele inicialmente <b>quente e ruborizada</b>. PAMPs/DAMPs → <b>TLR → NF-κB → TNF, IL-1, HMGB1</b>, ERO, complemento. Endotélio perde propriedades anticoagulantes; LPS ativa <b>fator tecidual</b>, ↓ trombomodulina → <b>CID</b> (trombose + sangramento). Disfunção múltipla de órgãos (rim costuma parar primeiro); mortalidade &gt;40% (Brasil: 55,7% em UTI). Difícil de reverter: rede redundante que se autoamplifica + fase de <b>imunossupressão</b> sobreposta.</li>
<li><b>Anafilático</b>: hipersensibilidade <b>tipo I (IgE)</b> → desgranulação maciça de mastócitos/basófilos → <b>histamina</b> → dilatação venular, ↑ permeabilidade, edema, <b>broncoconstrição</b>; urticária, angioedema, dispneia, vômitos, hipotensão.</li>
<li><b>Neurogênico</b>: trauma medular grave/lesão cerebral → perda do tônus simpático → <b>hipotensão com BRADICARDIA</b>, hipotermia, paralisia flácida abaixo da lesão.</li>
</ul>
<h3>Estágios</h3>
<div class="tbl"><table>
<tr><th>Estágio</th><th>O que acontece</th></tr>
<tr><td>1. Compensado (não progressivo)</td><td>Barorreceptores → catecolaminas → taquicardia, vasoconstrição periférica (pele pálida), retenção renal. <b>Totalmente reversível</b>. "O corpo dando conta"</td></tr>
<tr><td>2. Progressivo</td><td>Hipoperfusão generalizada → anaerobiose → <b>acidose láctica</b> paralisa esfíncteres pré-capilares → estase capilar, anóxia endotelial, microtrombos, oligúria. Ciclo vicioso. "Perdendo o controle"</td></tr>
<tr><td>3. Irreversível</td><td>Ruptura de lisossomos, necrose maciça, translocação de bactérias/toxinas intestinais, depressão miocárdica, falência múltipla — <b>não recupera mesmo com volume e pressão restaurados</b></td></tr>
</table></div>
<h3>Morfologia</h3>
<ul>
<li>Alvos: cérebro, coração, pulmões, rins.</li>
<li><b>Rim</b>: <b>necrose tubular aguda (NTA) isquêmica</b> — desnudamento do epitélio tubular cortical, perda da borda em escova, <b>cilindros proteicos</b> → insuficiência renal aguda, <b>anúria</b>.</li>
<li><b>Pulmão</b>: <b>dano alveolar difuso</b> — septos espessados e permeáveis, exsudato rico em fibrina → <b>membranas hialinas</b> rosadas → bloqueio da troca gasosa.</li>
</ul>
`},
/* ============================ IMUNOLOGIA ============================ */
{
id: "i-dai", area: "imuno", title: "Resposta imune nas DAI", sub: "AR, LES, celíaca, EM, miastenia, DM1, Crohn",
html: `
<div class="box key"><b>Esquema geral (Profa Karina)</b>Autoantígenos são apresentados por APCs a <b>T CD4+</b>, que iniciam cascatas <b>celulares</b> (Th1/Th17, CD8) ou <b>humorais</b> (células B e autoanticorpos).</div>
<div class="tbl"><table>
<tr><th>Doença</th><th>HLA / genes</th><th>Gatilhos</th><th>Alvo / autoanticorpos</th><th>Efetores</th></tr>
<tr><td><b>Artrite reumatoide</b></td><td>HLA-DR4/DR1 (epítopo compartilhado)</td><td>Fumo, <i>P. gingivalis</i>, microbiota</td><td>Proteínas <b>citrulinadas</b>; FR (IgM anti-IgG), <b>anti-CCP</b></td><td>Th1 (IFN-γ), Th17 (IL-17); TNF-α, IL-1, IL-6; <b>RANKL</b> → osteoclasto</td></tr>
<tr><td><b>LES</b></td><td>HLA-DR2/DR3</td><td>UV, vírus, fármacos</td><td>Nucleares: <b>anti-dsDNA, anti-Sm</b>, anti-RNP, anti-histona, Ro/La</td><td>Imunocomplexos (III), C3/C4 ↓, C5a; Th1/Th17; <b>IFN-α</b> (pDC)</td></tr>
<tr><td><b>Doença celíaca</b></td><td><b>HLA-DQ2/DQ8</b></td><td>Glúten (trigo, cevada, centeio)</td><td><b>Gliadina desaminada pela tTG</b>; <b>anti-tTG (principal)</b>, antiendomísio, antigliadina</td><td>CD4 (IFN-γ, TNF-α); <b>CD8 intraepiteliais</b> (inata) → atrofia de vilosidades, má absorção</td></tr>
<tr><td><b>Esclerose múltipla</b></td><td><b>HLA-DRB1*1501</b></td><td><b>EBV</b>, ↓ vitamina D, tabagismo</td><td>Mielina: <b>MBP, MOG, PLP</b></td><td>CD4 ativados fora do SNC → moléculas de adesão → atravessam BHE; IFN-γ, IL-17, TNF; micróglia/macrófagos fagocitam mielina; CD8 → lesão axonal</td></tr>
<tr><td><b>Miastenia gravis</b></td><td>HLA-DR3, CTLA-4, PTPN22</td><td>Vírus, fármacos, <b>timoma/hiperplasia tímica</b></td><td><b>Anti-AChR (~85%)</b>, anti-MuSK (5–10%), anti-LRP4</td><td>IgG1/IgG3 (tipo II): bloqueiam, internalizam (endocitose) e lesam via <b>complemento</b></td></tr>
<tr><td><b>DM1</b></td><td>HLA-DR3, DR4, <b>DQ8</b>; INS, PTPN22, CTLA-4</td><td>Enterovírus, leite bovino precoce?, disbiose</td><td>Insulina, GAD65, IA-2, ZnT8 (marcadores: IAA, <b>anti-GAD65</b>, anti-IA-2, anti-ZnT8)</td><td><b>CD8</b> destrói célula β (tipo IV); CD4; IL-1β, IFN-γ, TNF-α. Sintomas com <b>80–90%</b> destruído</td></tr>
<tr><td><b>Doença de Crohn</b></td><td><b>NOD2/CARD15</b>, ATG16L1, IRGM (autofagia)</td><td>Disbiose, dieta, fumo, infecção</td><td>Antígenos da <b>microbiota</b></td><td>Th1 (IFN-γ, TNF-α) e Th17 (IL-17, IL-22); inflamação <b>transmural</b>, <b>granulomas não caseosos</b>, fístulas, estenoses; íleo terminal e cólon direito</td></tr>
<tr><td><b>Hashimoto</b></td><td>HLA-DR3, DR5, CTLA-4</td><td>Vírus, iodo, estresse</td><td>Anti-TPO (mais sensível), anti-Tg</td><td>Th1/Th17, CD8, NK (ADCC) — tipo IV + II</td></tr>
<tr><td><b>Graves</b></td><td>HLA-DR3, CTLA-4, PTPN22</td><td>Vírus, estresse, fumo</td><td><b>TRAb/TSI</b> (IgG estimuladora)</td><td>Tipo II estimulador; reação cruzada com fibroblastos orbitários</td></tr>
</table></div>
<h3>Detalhes que caem</h3>
<ul>
<li><b>RANKL</b> (Receptor Activator of NF-κB Ligand): expresso por T ativados, estroma sinovial e osteoblastos; liga <b>RANK</b> no pré-osteoclasto → maturação, sobrevivência e reabsorção óssea.</li>
<li><b>Citrulinação</b>: modificação pós-traducional arginina → citrulina.</li>
<li><b>Fator reumatoide</b>: IgM dirigida contra a porção Fc da IgG.</li>
<li><b>Anti-Sm</b>: contra proteínas do complexo ribonucleoproteico nuclear (processamento de mRNA), altamente específico do LES.</li>
<li><b>LES</b>: complemento consumido → <b>C3 e C4 baixos</b>; C5a atrai neutrófilos e linfócitos.</li>
<li><b>Celíaca</b>: gliadina é rica em glutamina e prolina (difícil digerir); tTG desamina → maior afinidade por <b>HLA-DQ2/DQ8</b>. Componente inato: gliadina ativa diretamente epitélio e <b>linfócitos intraepiteliais CD8</b>.</li>
<li><b>EM</b>: desmielinização → lentificação da condução; inflamação → <b>surto-remissão</b>; degeneração axonal → progressão e incapacidade.</li>
<li><b>Miastenia</b>: fraqueza <b>flutuante</b> que <b>piora com esforço e melhora com repouso</b>; ptose, diplopia, disartria, disfagia.</li>
<li><b>DM1</b>: autoanticorpos <b>não destroem</b> a célula β; são marcadores. Quem mata é o <b>CD8</b>.</li>
<li><b>Graves</b> fases: silenciosa → ativa (bócio, sintomas adrenérgicos) → estabilização/recidiva.</li>
</ul>
<div class="box trap"><b>Pegadinhas</b>• "Celíaca é alergia ao glúten" — <b>não</b>: é autoimune com HLA-DQ2/DQ8 e tTG. <br>• Miastenia anti-AChR é <b>tipo II</b> (anticorpo contra receptor), não tipo III. <br>• Crohn: granuloma <b>não caseoso</b> (caseoso = tuberculose).</div>
`},
{
id: "i-transplante", area: "imuno", title: "Transplante e rejeição", sub: "HLA, vias, rejeições, imunossupressão, DECH",
html: `
<div class="box key"><b>Pergunta-guia</b>Por que o sistema imune ataca um órgão saudável? Porque ele não avalia <b>função</b>, avalia <b>identidade</b>: o <b>HLA</b> (MHC humano) é a assinatura genética.</div>
<h3>Tipos de enxerto</h3>
<div class="tbl"><table>
<tr><th>Enxerto</th><th>Doador × receptor</th><th>Risco</th></tr>
<tr><td>Autoenxerto (autólogo)</td><td>Mesma pessoa (pele no queimado)</td><td>Nenhum</td></tr>
<tr><td>Isoenxerto (singênico)</td><td>Gêmeos univitelinos</td><td>Nenhum</td></tr>
<tr><td>Aloenxerto (alogênico)</td><td>Mesma espécie, genética diferente</td><td>Alto sem imunossupressão</td></tr>
<tr><td>Xenoenxerto (xenogênico)</td><td>Espécies diferentes</td><td>Fortíssimo: hiperaguda + vírus entre espécies (<b>PERVs</b>); porcos editados por CRISPR</td></tr>
</table></div>
<h3>Alvos</h3>
<ul><li><b>Primários</b>: ABO (e Rh) e HLA/MHC. <b>Secundários</b>: proteínas do órgão.</li>
<li>HLA no <b>cromossomo 6</b>, sistema mais polimórfico do genoma (HLA-DRB1 &gt; 3.400 alelos).</li>
<li><b>Classe I (A, B, C)</b>: todas as células nucleadas → <b>CD8</b>. <b>Classe II (DP, DQ, DR)</b>: APCs → <b>CD4</b>.</li>
<li>Maior mismatch → resposta mais forte, pior prognóstico. Ideal: HLA compatível, predomínio de <b>Treg e TGF-β</b>, ABO compatível.</li></ul>
<h3>4 fases da resposta</h3>
<p>(1) Inflamação cirúrgica e imunidade inata → (2) reconhecimento dos aloantígenos → (3) ativação dos linfócitos → (4) fase efetora.</p>
<div class="tbl"><table>
<tr><th>Via de alorreconhecimento</th><th>Como</th><th>Papel</th></tr>
<tr><td><b>Direta</b> ("o espião")</td><td>APC <b>do doador</b> vai ao linfonodo do receptor e mostra seu MHC <b>intacto</b> (sem processamento)</td><td>Rápida, agressiva — motor da <b>rejeição aguda</b>. Ex.: CD8 do receptor reconhece MHC I do doador</td></tr>
<tr><td><b>Indireta</b> ("o detetive")</td><td>APC <b>do receptor</b> fagocita restos do doador, processa e apresenta peptídeos no <b>próprio</b> MHC</td><td>Lenta e contínua — motor da <b>rejeição crônica</b>. Ex.: CD4 reconhece fragmento de MHC do doador</td></tr>
<tr><td><b>Semidireta</b></td><td>APC do receptor adquire MHC intacto do doador (<b>exossomos</b>)</td><td>Meio-termo</td></tr>
</table></div>
<h4>Fase efetora — 3 frentes</h4>
<ul><li><b>CD4 Th1</b>: reconhecem MHC II, IL-2 e IFN-γ, ativam macrófagos M1 e NK → <b>hipersensibilidade tipo IV</b>.</li>
<li><b>CD8</b>: MHC I; perforina, granzima, Fas-FasL.</li>
<li><b>B → aloanticorpos anti-HLA</b>: complemento via clássica (C3a/C5a inflamação, C3b opsonização, MAC lise), ADCC por NK, macrófagos via FcγR. IgM no início, IgG a longo prazo.</li></ul>
<h3>Tipos de rejeição</h3>
<div class="tbl"><table>
<tr><th></th><th>Hiperaguda</th><th>Aguda</th><th>Crônica</th></tr>
<tr><td>Tempo</td><td><b>Minutos a horas</b></td><td>Dias a semanas</td><td>Meses a anos (&gt;6 meses)</td></tr>
<tr><td>Mecanismo</td><td><b>Anticorpos pré-formados</b> (IgG) anti-HLA/ABO (gestações, transfusões, transplantes prévios; mimetismo)</td><td>Celular (CD8, CD4) e humoral (anti-HLA <i>de novo</i>); via direta</td><td>Via <b>indireta</b>, CD4 Th1 (IFN-γ), inflamação silenciosa</td></tr>
<tr><td>Histologia</td><td>Complemento, NK, M1, coagulação: <b>trombose maciça, necrose hemorrágica</b>, órgão cianótico, edemaciado</td><td><b>Endotelialite</b> e inflamação intersticial</td><td><b>Arteriosclerose do enxerto</b> (espessamento concêntrico da íntima), fibrose, atrofia</td></tr>
<tr><td>Reversível?</td><td>Não (e não é falha de tolerância)</td><td>Frequentemente, com imunossupressão intensa</td><td>Não; principal causa de perda tardia (falha/parada de imunossupressor, infecções, hábitos)</td></tr>
</table></div>
<h3>Funil pré-transplante</h3>
<ol class="flow"><li><b>ABO</b>: barreira absoluta (anticorpos naturais → hiperaguda)</li><li><b>Tipagem HLA</b> (A, B, DR): mais matches = resposta mais fraca</li><li><b>Crossmatch</b> (prova cruzada): soro do receptor + linfócitos do doador + anti-Ig humana + complemento → lise = <b>reativo → não transplantar</b></li></ol>
<h3>Imunossupressão: 3 sinais do linfócito T</h3>
<div class="tbl"><table>
<tr><th>Sinal</th><th>O que acontece</th><th>Fármaco</th></tr>
<tr><td>1. TCR–MHC</td><td>Ca²⁺ → <b>calcineurina</b> → NFAT → transcrição de <b>IL-2</b></td><td><b>Ciclosporina, tacrolimus</b> (inibem calcineurina)</td></tr>
<tr><td>2. Coestimulação</td><td>B7 (APC) + CD28 (T) — "dupla chave"</td><td><b>Belatacepte</b> (CTLA4-Ig): liga B7 → T anérgico</td></tr>
<tr><td>3. Proliferação</td><td>IL-2R → <b>mTORC1</b> → expansão clonal</td><td><b>Sirolimo, everolimo</b> (inibidores de mTOR)</td></tr>
</table></div>
<p>Outros: <b>azatioprina</b> (antimitótico), globulina antitimócito, anti-CD3, <b>anti-CD25</b> (receptor de IL-2), anti-CD40L (bloqueia diálogo B-T, rejeição humoral), corticoides. Pouca imunossupressão → rejeição; demais → <b>infecções oportunistas e neoplasias</b> (imunodeficiência secundária).</p>
<h3>DECH — doença do enxerto contra o hospedeiro</h3>
<ol class="flow"><li>Transplante com células imunocompetentes (<b>medula/células-tronco hematopoéticas</b>)</li><li>T do doador reconhecem aloantígenos do hospedeiro</li><li>Ativação, expansão clonal, citocinas</li><li>Migram para tecidos</li><li>Lesão de <b>pele, fígado e TGI</b></li></ol>
<p>Rejeição: receptor ataca enxerto. DECH: enxerto ataca receptor. DECH crônica: após ~100 dias. <b>Axatilimabe (Niktimvo®)</b>: anticorpo contra <b>CSF-1R (CD115)</b> de monócitos/macrófagos (ligantes CSF-1/M-CSF e IL-34) → ↓ macrófagos patogênicos e pró-fibróticos → ↓ inflamação e fibrose. Não age primariamente no T.</p>
<div class="box trap"><b>Pegadinha integrada (pato)</b>Rejeição hiperaguda = órgão vira coágulo: <b>trombose maciça e necrose hemorrágica</b> logo após anastomose (rim fica cianótico, mosqueado). Rejeição crônica = espessamento da íntima → <b>isquemia</b> → fibrose e atrofia.</div>
`},
{
id: "i-idinata", area: "imuno", title: "Imunodeficiências: inata", sub: "Conceitos, fagócitos, complemento",
html: `
<h3>Conceitos</h3>
<p>Defeitos genéticos ou adquiridos em um ou mais componentes: <b>fagócitos, complemento, linfócitos T, linfócitos B</b> → infecções, autoimunidade, neoplasias.</p>
<div class="tbl"><table>
<tr><th>Primária (IDP, congênita)</th><th>Secundária (IDS, adquirida)</th></tr>
<tr><td>Genética, desde o nascimento; crianças; suspeita após <b>6 meses</b> (fim da IgG materna)</td><td>Adultos; <b>HIV</b>, imunossupressores, radiação, desnutrição, senescência, tumores, <b>doença hepática</b> (fígado produz complemento)</td></tr>
</table></div>
<p>Alarme: infecção de <b>repetição, grave ou de evolução incomum</b>.</p>
<h4>10 sinais de alerta para IDP</h4>
<ol><li>≥2 pneumonias no último ano</li><li>≥4 otites novas no último ano</li><li>Estomatites de repetição ou monilíase &gt; 2 meses</li><li>Abscessos de repetição ou ectima</li><li>1 infecção sistêmica grave (meningite, osteoartrite, sepse)</li><li>Infecções intestinais de repetição / diarreia crônica</li><li>Asma grave, doença do colágeno ou autoimune</li><li>Efeito adverso ao <b>BCG</b> e/ou micobacteriose</li><li>Fenótipo de síndrome associada</li><li>História familiar de imunodeficiência</li></ol>
<h3>Fagócitos</h3>
<p>Normal: rolamento (<b>selectinas</b>) → adesão firme (<b>integrinas</b>) → diapedese → fagossomo → fagolisossomo → <b>EROs via NADPH oxidase</b>.</p>
<div class="tbl"><table>
<tr><th>Doença</th><th>Defeito</th><th>Achados</th></tr>
<tr><td><b>Doença granulomatosa crônica (DGC)</b></td><td><b>NADPH oxidase</b> → sem EROs (superóxido, H₂O₂); neutrófilo chega mas <b>não mata</b></td><td>Abscessos recorrentes (pele, órgãos) por <b>catalase-positivos</b> (<i>S. aureus</i>) e fungos (<i>Aspergillus</i>); <b>granulomas</b>; neutrofilia/contagem normal. Diagnóstico: <b>DHR-123 ou NBT</b> reduzidos. Tratamento: <b>IFN-γ</b> (M1 e neutrófilo ainda fazem NETose), antibióticos, TMO</td></tr>
<tr><td><b>Neutropenia congênita</b></td><td>Maturação do neutrófilo na medula</td><td>Infecções bacterianas, <b>sem pus</b>, poucos neutrófilos</td></tr>
<tr><td><b>LAD I</b></td><td>Integrina β2 (<b>CD18</b>) → sem adesão firme</td><td rowspan="3">Infecções recorrentes por bactérias e fungos, <b>cicatrização deficiente, ausência de pus</b>; leucócitos no sangue <b>normais ou altos</b> (não saem do vaso); ↓ NETose</td></tr>
<tr><td><b>LAD II</b></td><td>Transportador de <b>fucose</b> → sem ligantes de selectina → não rola</td></tr>
<tr><td><b>LAD III</b></td><td>Sinalização (ativação) de integrina em leucócitos <b>e plaquetas</b></td></tr>
</table></div>
<div class="box key"><b>DGC × LAD</b>Na DGC o neutrófilo <b>chega e não mata</b> → abscesso + granuloma. Na LAD ele <b>nem chega</b> → sem pus, leucocitose no sangue. LAD III ainda <b>sangra</b> (plaqueta também não ativa integrina).</div>
<h3>Sistema complemento</h3>
<ul><li>Funções: <b>opsonização (C3b</b>, principal opsonina), <b>inflamação (C5a</b>, anafilatoxina; também C3a), <b>lise (MAC = C5b–C9)</b>.</li>
<li>Vias: <b>clássica</b> (IgM/IgG → C1qrs), <b>alternativa</b> (C3b, fator B, fator D, properdina), <b>lectinas</b> (MBL + MASPs). Convergem para C3 e via comum C5–C9.</li>
<li>Avaliação global: <b>CH50</b>.</li></ul>
<div class="tbl"><table>
<tr><th>Deficiência</th><th>Consequência</th></tr>
<tr><td><b>C1q, C1r, C1s, C2</b> (clássica inicial)</td><td>Infecções por <b>encapsulados</b> e vírus + <b>autoimunidade (LES)</b></td></tr>
<tr><td><b>C3</b> (centro)</td><td>Opsonização comprometida: infecções graves por <b>piogênicos</b> (<i>S. aureus</i>, sepse), Gram-negativos, vírus; <b>glomerulonefrite</b> (imunocomplexos) e autoimunidade</td></tr>
<tr><td>Fator B, D, properdina (alternativa)</td><td>Infecções respiratórias, <b>meningites</b> (encapsulados, Neisseria)</td></tr>
<tr><td><b>C5–C9</b> (MAC)</td><td>Bactéria não é lisada: <b>meningite recorrente e infecções invasivas por <i>Neisseria</i></b>, sepse fulminante</td></tr>
<tr><td><b>Inibidor de C1 (C1-INH)</b></td><td><b>Angioedema hereditário</b>: via clássica ligada o tempo todo → ↑ C4a, C3a, C5a → ↑ permeabilidade → edema em vários órgãos; <b>edema de laringe</b> é o mais grave. Excesso de ativação (não infecções). Tratamento citado: corticoides (↑ inibidor de C1)</td></tr>
</table></div>
<div class="box trap"><b>Pegadinha</b>Angioedema hereditário × anafilaxia: ambos dão edema, mas AEH é por <b>complemento/C1-INH</b> (sem IgE, sem urticária típica, história familiar). Anafilaxia é <b>IgE/mastócito</b> com urticária e broncoespasmo.</div>
`},
{
id: "i-idadapt", area: "imuno", title: "Imunodeficiências: adaptativa", sub: "DiGeorge, IL-12R, Bruton, CVID, hiper-IgM, IgA, SCID",
html: `
<div class="tbl"><table>
<tr><th>Doença</th><th>Defeito</th><th>Laboratório</th><th>Clínica</th></tr>
<tr><td><b>DiGeorge</b></td><td>Deleção <b>22q11.2</b> → falha das bolsas faríngeas (8ª semana) → hipo/aplasia do <b>timo</b> (e paratireoides)</td><td><b>T (CD3+) ↓</b>; B normal (parcial) ou ↓ (completa); RX sem sombra tímica</td><td>Bactérias, fungos, vírus; orelhas baixas, fenda palatina, voz anasalada, "boca de peixe", <b>cardiopatia</b>, <b>hipocalcemia</b> (sem paratireoide), atraso; Tto: transplante de timo</td></tr>
<tr><td><b>Def. receptor de IL-12</b></td><td>Sem receptor no CD4 → <b>não forma Th1</b> (predomina Th2)</td><td>—</td><td><b>Micobactérias</b>, reação adversa ao <b>BCG</b>, pneumonias, fungos graves. Tto: IFN-γ (ajuda M1, NK, CD8; Th1 segue deficiente)</td></tr>
<tr><td><b>Bruton (XLA)</b></td><td><b>BTK</b> (cromossomo X) → B não matura na medula</td><td><b>B ausente (CD19/CD20)</b>, todas as Ig ↓, sem resposta vacinal</td><td>Meninos após 6 meses; <b>amígdalas e linfonodos muito pequenos</b>; otite, sinusite, pneumonia, meningite; <b>Giardia</b></td></tr>
<tr><td><b>CVID</b></td><td>B não vira plasmócito (heterogênea)</td><td><b>B presente</b>; IgG e IgA ↓, IgM normal/↓; vacina ↓</td><td>Adolescente/adulto; infecções respiratórias, diarreia crônica, <b>autoimunidade, linfoproliferação, linfoma, câncer gástrico</b></td></tr>
<tr><td><b>Hiper-IgM</b></td><td>Falha da <b>troca de classe</b>: CD40L (T CD4) / CD40 (B) / AID</td><td><b>IgM ↑</b>; IgG, IgA, IgE ↓</td><td>Piogênicos, <b><i>Pneumocystis</i></b>, <i>Cryptosporidium</i>; linfadenopatia, hepatoesplenomegalia, neoplasias</td></tr>
<tr><td><b>Def. seletiva de IgA</b></td><td>Troca de classe para cadeia α (a mais comum)</td><td><b>IgA &lt; 7 mg/dL</b>; IgG e IgM normais/↑; vacina normal</td><td>Maioria assintomática; mucosas (sinusite, pulmão, diarreia, <b>giardíase</b>), <b>alergias, autoimunidade</b> (ex.: celíaca)</td></tr>
<tr><td><b>SCID</b></td><td>Celular + humoral; T, B, NK em combinações</td><td><b>Linfopenia</b>, Ig ↓, citometria; <b>TRECs ausentes</b> no teste do pezinho (até 5º dia)</td><td>Primeiros 6 meses: pneumonias, <b>candidíase oral persistente</b>, diarreia, atraso de crescimento, oportunistas, sem amígdalas/linfonodos, reação grave a <b>vacinas vivas (BCG)</b>. Tto: <b>TMO</b> precoce; isolamento, IGIV, profilaxia, sem vacina viva, terapia gênica</td></tr>
</table></div>
<h3>Mecanismos da SCID</h3>
<div class="tbl"><table>
<tr><th>Causa</th><th>Fenótipo</th><th>Por quê</th></tr>
<tr><td><b>Ligada ao X — cadeia γc</b> (mais comum)</td><td><b>T⁻ B⁺ NK⁻</b></td><td>γc é compartilhada por receptores de IL-2, 4, 7, 9, 15, 21. Sem <b>IL-7R</b> o T não matura; sem <b>IL-15R</b> a NK não forma; B presente mas sem ajuda T (não funcional)</td></tr>
<tr><td><b>Deficiência de ADA</b></td><td><b>T⁻ B⁻ NK⁻</b></td><td>Metabólitos tóxicos (desoxiadenosina) matam linfócitos</td></tr>
<tr><td><b>Defeito de recombinação V(D)J</b> (RAG)</td><td><b>T⁻ B⁻ NK⁺</b></td><td>Sem rearranjo de TCR e BCR; NK não precisa de recombinação</td></tr>
</table></div>
<h3>IL-12 no detalhe</h3>
<p>Produzida por <b>macrófagos M1 e células dendríticas</b>; liga inata à adaptativa: NK e T produzem <b>IFN-γ</b>, Th0 → <b>Th1</b>, ↑ citotoxicidade de CD8 e NK, ↓ IgE (suprime IL-4).</p>
<div class="box key"><b>Como diferenciar as deficiências de anticorpo</b>
• <b>B ausente</b> + tudo baixo → Bruton.<br>
• <b>B presente</b> + IgG e IgA baixas → CVID.<br>
• <b>IgM alta</b> + resto baixo → hiper-IgM.<br>
• <b>Só IgA</b> baixa → deficiência seletiva de IgA.<br>
• <b>T baixo</b> + dismorfias + cardiopatia + hipocalcemia → DiGeorge.<br>
• <b>Linfopenia</b> grave + TRECs ausentes → SCID.</div>
<div class="box trap"><b>Pegadinhas</b>• Deficiência de anticorpo aparece após <b>6 meses</b> (fim da IgG materna). <br>• Na deficiência de IgA, sorologias celíacas <b>IgA</b> (anti-tTG IgA) podem dar <b>falso-negativo</b>. <br>• Pacientes com IgA ausente podem ter anafilaxia em transfusão (anti-IgA).<br>• Vacinas vivas (BCG, rotavírus) são contraindicadas em SCID.</div>
`},
{
id: "i-anemias", area: "imuno", title: "Raciocínio das anemias", sub: "VCM, reticulócitos, ferro, Hb S",
html: `
<div class="box key"><b>Definição</b>Redução da Hb abaixo da referência: <b>&lt; 12 g/dL (mulher)</b>, <b>&lt; 13 g/dL (homem)</b>. Sintomas = hipóxia tecidual: cefaleia, tontura, lipotimia, fraqueza, câimbras, angina. Intensidade depende do grau, idade e <b>velocidade</b> de instalação.</div>
<h3>Roteiro em 3 passos</h3>
<ol class="flow"><li><b>VCM</b> → família (micro / normo / macro)</li><li><b>Reticulócitos</b> → medula está respondendo?</li><li><b>Exame confirmatório</b> (perfil de ferro, B12/folato, eletroforese, esfregaço)</li></ol>
<h3>Classificação fisiopatológica</h3>
<div class="tbl"><table>
<tr><th>Grupo</th><th>Causas</th><th>Reticulócitos</th></tr>
<tr><td><b>Falta de produção</b></td><td>Carência de ferro, B12, folato; falta de eritropoetina; falta de tecido (benzeno, radiação, fármacos, infecções, toxinas); invasão medular (leucemia, mieloma, metástase)</td><td><b>Baixos</b></td></tr>
<tr><td><b>Destruição (hemólise)</b></td><td>Defeitos da hemácia (membrana, enzimas, hemoglobinopatias, talassemias, HPN) ou agressão (malária, venenos, calor, trauma microangiopático, <b>autoanticorpos</b>)</td><td><b>Aumentados</b></td></tr>
<tr><td><b>Perdas</b></td><td>Aguda (retic ↑) ou crônica (espoliação de ferro → ferropriva, retic ↓)</td><td>Depende</td></tr>
</table></div>
<h3>Classificação morfológica (VCM)</h3>
<ul><li><b>Microcítica hipocrômica</b> (VCM ↓): ferropriva (principal), talassemia.</li>
<li><b>Normocítica normocrômica</b>: leucemia, linfoma/mieloma, agentes químicos, malária, hemólise imune, falciforme, hemorragia aguda, doença crônica.</li>
<li><b>Macrocítica</b> (VCM &gt; 100 fL): <b>megaloblástica</b> (B12/folato).</li></ul>
<h3>Metabolismo do ferro</h3>
<p>Ferro livre é reativo (oxida tudo) → <b>transferrina</b> transporta para a medula (eritropoese) e para o fígado (estoque como <b>ferritina</b>).</p>
<div class="tbl"><table>
<tr><th>Exame</th><th>Mede</th></tr>
<tr><td>Ferro sérico</td><td>Ferro circulante naquele momento</td></tr>
<tr><td><b>Ferritina</b></td><td>Estoque (fígado) — <b>primeiro a cair</b> na ferropriva</td></tr>
<tr><td>CTLF / TIBC</td><td>Medida indireta da transferrina</td></tr>
<tr><td>Saturação da transferrina</td><td>Ferro sérico / CTLF</td></tr>
</table></div>
<p>Carência: transferrina "vazia" (sat ↓) e <b>aumentada</b> ("mecanismo de desespero") → padrão <b>ferro ↓ + CTLF ↑</b>. Excesso: sat ↑, transferrina ↓.</p>
<div class="tbl"><table>
<tr><th></th><th>Ferropriva</th><th>Doença crônica</th><th>Megaloblástica</th><th>Falciforme</th></tr>
<tr><td>Mecanismo</td><td>Falta de ferro</td><td>Ferro "preso" (inflamação)</td><td>DNA não duplica (B12/folato)</td><td>Destruição (HbS)</td></tr>
<tr><td>VCM</td><td>↓</td><td>Normal/↓</td><td>↑ (&gt;100)</td><td>Normal</td></tr>
<tr><td>Reticulócitos</td><td>↓</td><td>↓</td><td>↓</td><td><b>↑</b></td></tr>
<tr><td>Ferritina</td><td><b>↓</b></td><td>Normal/<b>↑</b></td><td>Normal/↑</td><td>Normal/↑</td></tr>
<tr><td>Ferro sérico</td><td>↓</td><td>↓</td><td>Normal</td><td>Normal</td></tr>
<tr><td>CTLF</td><td><b>↑</b></td><td><b>↓</b></td><td>Normal</td><td>Normal</td></tr>
<tr><td>Sat. transferrina</td><td>↓</td><td>↓/normal</td><td>Normal</td><td>Normal</td></tr>
<tr><td>Bilirrubina indireta</td><td>Normal</td><td>Normal</td><td>Normal/↑ leve</td><td><b>↑</b> (+ LDH ↑)</td></tr>
<tr><td>Esfregaço</td><td>Hemácia pequena, halo central aumentado</td><td>—</td><td><b>Macrócitos, neutrófilos hipersegmentados</b></td><td><b>Drepanócitos</b>, policromatofilia</td></tr>
</table></div>
<h3>Destruição da hemácia e icterícia</h3>
<p>Macrófago do baço: globina → aminoácidos; ferro → transferrina → medula; heme → <b>bilirrubina indireta</b> (não conjugada) → fígado conjuga (direta) → bile → urobilinogênio → estercobilina (fezes)/urobilina (urina). Hemólise → <b>BI ↑</b> → icterícia. Hepatite também dá icterícia, por falha de processamento.</p>
<h3>Ferropriva</h3>
<p>Causas: dieta pobre, má absorção (<b>celíaca</b>, DII, disenterias, ressecções, <b>bariátrica</b>), <b>perdas</b> (menstrual, TGI), ↑ demanda (gestação, crescimento).</p>
<h3>Megaloblástica</h3>
<p>Falta B12/folato → DNA não duplica → assincronia núcleo-citoplasma → célula grande. B12 só em alimento animal; precisa do <b>fator intrínseco</b> (estômago) para absorção no <b>íleo</b>. <b>Anemia perniciosa</b> = autoimune (falta de fator intrínseco). Também: vegano estrito, bariátrica, ressecção ileal. Sinal: <b>neutrófilo hipersegmentado</b>. Reposição injetável/sublingual na má absorção.</p>
<h3>Hemoglobinas e eletroforese</h3>
<p>HbA1 (α2β2) ~98%; HbA2 (α2δ2) ~2%; HbF (α2γ2) fetal. Eletroforese: gel + corrente elétrica, bandas por carga/tamanho, comparar com padrão. Tipos: A, A2, F, S, C, M (meta-Hb, Fe³⁺).</p>
<h3>Anemia falciforme</h3>
<ol class="flow"><li>Mutação na β-globina: <b>ácido glutâmico → valina</b></li><li>Carga neutra: ao desoxigenar, HbS polimeriza (<b>tactoides</b>)</li><li>Membrana deforma → <b>drepanócito</b></li><li>Falciza só na desoxigenação, nem todas ao mesmo tempo</li></ol>
<ul><li>Consequências: <b>vaso-oclusão</b> (crises de dor, AVC, isquemia/infartos), <b>hemólise</b> (vida 10–20 dias vs 120), <b>autoesplenectomia</b> → infecções (encapsulados).</li>
<li><b>HbSS</b>: doença (Hb 6–9 g/dL). <b>HbAS</b> (traço): ~50% A1 / 50% S, sem anemia; risco só em hipóxia extrema (altitude).</li>
<li>Sintomas começam ~<b>6 meses</b>: troca de γ (HbF) por β. Triagem: <b>teste do pezinho</b>.</li>
<li>Exames: Hb ↓, <b>retic ↑, BI ↑, LDH ↑</b>; drepanócitos; <b>eletroforese (banda S) confirma</b>.</li></ul>
<h3>Talassemias e células imaturas</h3>
<p>Desequilíbrio das cadeias (α ou β) → hemólise, retic ↑; eletroforese pode mostrar HbF e A2 ↑. Células imaturas no sangue: leucemia (<b>blastos</b>), infecção grave (<b>desvio à esquerda</b>), doença hemolítica do RN (<b>eritroblastos</b>).</p>
<div class="box trap"><b>Pontes com patologia e imuno</b>• B12/folato ↓ → <b>homocisteína ↑ → trombose</b>. <br>• Anemia perniciosa é <b>autoimune</b> (gastrite atrófica; associa-se a Hashimoto). <br>• Hemorragia crônica → ferropriva; hemorragia aguda → retic ↑. <br>• Anemia = hipoxemia → <b>multiplicador do infarto</b>. <br>• Falciforme → fator de risco de <b>trombose</b> e infartos; asplenia → encapsulados.</div>
`}
];
