/* Casos clínicos discursivos (estilo prova) — responda e compare com a resposta-modelo */
window.CASES = [
{id:"c1",a:"int",title:"A jovem do eritema e do rim",t:["p-les","i-dai","p-trombose"],
s:"Mulher, 24 anos, procura atendimento por dor e edema em mãos e joelhos, cansaço e manchas avermelhadas na face que pioram após praia. Há 2 meses nota urina espumosa e inchaço nas pernas. Exame: eritema em região malar poupando sulcos nasolabiais, edema de MMII (cacifo +). Exames: Hb 10,1 g/dL, plaquetas 98.000, proteinúria 3,2 g/24h, hematúria dismórfica, FAN 1:640 homogêneo, anti-dsDNA positivo, anti-Sm positivo, C3 e C4 baixos. Biópsia renal: proliferação difusa com espessamento circunferencial da parede capilar.",
q:[
{p:"Qual o diagnóstico e o mecanismo de hipersensibilidade predominante?",r:"Lúpus eritematoso sistêmico com nefrite lúpica (glomerulonefrite proliferativa difusa). Hipersensibilidade tipo III: imunocomplexos (autoanticorpo + antígeno nuclear) circulantes depositam em pequenos vasos/glomérulos e ativam complemento."},
{p:"Explique a sequência imunológica que leva à produção de anti-dsDNA.",r:"Predisposição (HLA-DR2/DR3, deficiências de C1q/C2/C4) + gatilho (UV) → aumento de apoptose e falha na eferocitose → acúmulo de antígenos nucleares (DNA, histonas, RNP) → quebra de tolerância → APCs apresentam a T CD4 → T ajudam B autorreativos → plasmócitos produzem FAN, anti-dsDNA, anti-Sm. IFN-α de células dendríticas plasmocitoides e Th1/Th17 perpetuam."},
{p:"Por que C3 e C4 estão baixos?",r:"Por consumo: os imunocomplexos ativam a via clássica do complemento; C5a recruta neutrófilos que liberam enzimas e radicais livres, lesando o tecido."},
{p:"Descreva o achado da biópsia renal e da pele.",r:"Rim: depósito maciço subendotelial de imunocomplexos com espessamento circunferencial da parede capilar → lesão em 'alça de arame' (wire loop). Vasos: vasculite necrotizante com necrose fibrinoide. Pele: eritema em asa de borboleta; histologia com degeneração vacuolar das células basais da junção dermoepidérmica."},
{p:"Qual o mecanismo do edema dos membros inferiores?",r:"Perda de albumina pela urina (proteinúria nefrótica) → queda da pressão oncótica → transudato; a retenção renal de sódio e água (SRAA) contribui."},
{p:"Se essa paciente tiver abortos de repetição e TVP, o que investigar e qual o paradoxo laboratorial?",r:"Síndrome do anticorpo antifosfolipídio (anti-β2-glicoproteína I, anticardiolipina, anticoagulante lúpico). O anticoagulante lúpico prolonga o TTPa in vitro, mas é pró-trombótico in vivo (ativa endotélio, plaquetas e complemento)."}
]},
{id:"c2",a:"pato",title:"O pós-operatório que perdeu o fôlego",t:["p-trombose","p-embolia","p-infarto"],
s:"Homem, 67 anos, obeso, 6º dia de pós-operatório de artroplastia total de joelho, acamado. Refere dor e inchaço na panturrilha esquerda desde ontem. Hoje, ao levantar, apresentou dispneia súbita, dor torácica pleurítica, taquicardia (FC 122) e SpO2 86%. D-dímero muito elevado.",
q:[
{p:"Qual a hipótese diagnóstica e qual a origem provável?",r:"Tromboembolia pulmonar (TEP) a partir de trombose venosa profunda (TVP) da perna esquerda."},
{p:"Quais elementos da tríade de Virchow estão presentes?",r:"Estase (imobilização, pós-operatório, obesidade) — principal fator da trombose venosa; lesão endotelial/ativação (cirurgia, trauma tecidual); hipercoagulabilidade adquirida (cirurgia, inflamação pós-operatória)."},
{p:"Descreva o trajeto do êmbolo.",r:"Veia profunda da perna → veia ilíaca → veia cava inferior → átrio direito → ventrículo direito → artéria pulmonar. O pulmão é o primeiro leito capilar após o coração direito."},
{p:"Qual a composição do trombo venoso e como diferenciá-lo de coágulo post-mortem?",r:"Trombo venoso (de estase): rico em fibrina e hemácias (vermelho). Formado em vida, aderido à parede, com linhas de Zahn (camadas claras de plaquetas/fibrina e escuras de hemácias). Coágulo post-mortem: gelatinoso, não aderido, 'gordura de galinha' e 'geleia de groselha'."},
{p:"O que significa o D-dímero?",r:"Produto da degradação da fibrina pela plasmina (fibrinólise via t-PA → plasmina); marcador de eventos tromboembólicos."},
{p:"Se ocorrer infarto pulmonar, será branco ou vermelho? Por quê?",r:"Vermelho (hemorrágico), em cunha: pulmão tem circulação dupla (artérias pulmonares e brônquicas) e tecido frouxo/esponjoso, então o sangue das brônquicas extravasa na área necrótica."},
{p:"Que efeito hemodinâmico a embolia causa?",r:"Aumento da resistência vascular pulmonar → sobrecarga do ventrículo direito (pode levar a disfunção/cor pulmonale agudo) e redução da oxigenação."}
]},
{id:"c3",a:"pato",title:"Infarto, bomba e êmbolo",t:["p-infarto","p-choque","p-edema","p-trombose"],
s:"Homem, 62 anos, tabagista, hipertenso e dislipidêmico, chega com dor torácica opressiva há 5 horas. ECG: supradesnivelamento de ST anterior. Evolui com PA 78/50, pele fria e pegajosa, turgência jugular, B3, estertores crepitantes bilaterais e oligúria. Sobrevive após angioplastia. Duas semanas depois, apresenta afasia e hemiparesia súbitas. Ecocardiograma: acinesia apical com trombo mural.",
q:[
{p:"Qual o evento inicial do IAM?",r:"Ruptura de placa aterosclerótica coronariana → exposição do núcleo lipídico e do fator tecidual → trombose arterial (plaquetas + fibrina) → oclusão coronariana aguda → isquemia → necrose coagulativa do miocárdio."},
{p:"Classifique o choque e justifique pelos sinais.",r:"Choque cardiogênico (falência da bomba; causa mais comum é o IAM). Turgência jugular, B3 e congestão pulmonar (estertores) o distinguem do hipovolêmico; pele fria e pegajosa, oligúria = má perfusão."},
{p:"Explique os estertores do ponto de vista hemodinâmico.",r:"Falência do VE represa sangue nas veias pulmonares → ↑ pressão hidrostática nos capilares pulmonares → edema pulmonar (transudato) → hipoxemia."},
{p:"Que alterações histológicas esperar no miocárdio ao longo do tempo?",r:"Minutos-horas: nada visível. 4–12 h: necrose coagulativa (fantasmas celulares). 1–2 dias: neutrófilos nas margens. Dias: remoção por macrófagos e tecido de granulação (M2 → TGF-β → fibroblastos). Semanas: cicatriz fibrosa. Macroscopia só após 18–24 h. Infarto branco (órgão sólido, circulação terminal)."},
{p:"Como a angioplastia pode tornar o infarto hemorrágico?",r:"Reperfusão: o sangue volta a microvasos já lesados e as hemácias extravasam na área necrótica."},
{p:"Explique o evento neurológico e o tipo de necrose cerebral.",r:"Área acinética/discinética + lesão endocárdica → estase e lesão endotelial → trombo mural no VE → fragmento embolizou para a circulação sistêmica (cérebro) → infarto cerebral. No SNC ocorre necrose liquefativa (pouco estroma, muitas enzimas da micróglia/neutrófilos, muito lipídio) → cavitação e cicatriz glial (gliose), sem fibrose. Neurônio tolera só 3–4 minutos de isquemia."},
{p:"Se o choque se prolongasse, que lesões renais e pulmonares seriam esperadas?",r:"Rim: necrose tubular aguda isquêmica (desnudamento do epitélio, perda de borda em escova, cilindros) → IRA e anúria. Pulmão: dano alveolar difuso com membranas hialinas."}
]},
{id:"c4",a:"pato",title:"Sepse que sangra",t:["p-choque","p-embolia","i-idinata"],
s:"Mulher, 70 anos, diabética, com pielonefrite por E. coli. Evolui com febre, confusão, PA 82/40 apesar de volume, pele inicialmente quente e ruborizada, lactato 6 mmol/L. Surgem petéquias, sangramento em punções, plaquetas 35.000, TP e TTPa prolongados, fibrinogênio baixo e D-dímero alto. Depois, anúria e insuficiência respiratória. Falece no 4º dia.",
q:[
{p:"Classifique o choque e explique a pele quente.",r:"Choque distributivo séptico. A vasodilatação sistêmica generalizada (tempestade de citocinas) deixa a pele quente e ruborizada no início, ao contrário dos choques hipovolêmico e cardiogênico."},
{p:"Descreva a cascata imune inata envolvida.",r:"PAMPs (LPS) e DAMPs → receptores TLR → NF-κB → TNF, IL-1, HMGB1, espécies reativas de O2 e ativação do complemento → vasodilatação, ↑ permeabilidade (edema, piora da hipóxia), lesão endotelial. Rede redundante e autoamplificada; fase de imunossupressão sobreposta."},
{p:"Por que a paciente trombosa e sangra ao mesmo tempo?",r:"CID: LPS e citocinas ativam fator tecidual; endotélio inflamado reduz trombomodulina e outros anticoagulantes → microtrombos de fibrina disseminados → consumo de plaquetas e fatores (coagulopatia de consumo) e ativação da fibrinólise → hemorragia (petéquias, sangramento em punções)."},
{p:"Explique o lactato elevado.",r:"Hipoperfusão → ↓ oferta de O2 → ↓ fosforilação oxidativa → glicólise anaeróbica → acúmulo de ácido lático (acidose láctica)."},
{p:"Em qual estágio do choque estava ao surgir a anúria? Justifique.",r:"Progressivo evoluindo para irreversível: acidose láctica paralisa esfíncteres pré-capilares, estase capilar, microtrombos, isquemia renal; no irreversível, ruptura de lisossomos, translocação bacteriana intestinal, depressão miocárdica e falência de múltiplos órgãos, sem resposta mesmo com restauração da pressão."},
{p:"Quais achados de necropsia nos rins e pulmões?",r:"Rins: necrose tubular aguda isquêmica com cilindros proteicos. Pulmões: dano alveolar difuso com membranas hialinas. Capilares de vários órgãos: microtrombos eosinofílicos de plaquetas e fibrina (CID)."}
]},
{id:"c5",a:"imuno",title:"O menino dos abscessos",t:["i-idinata"],
s:"Menino, 5 anos, com abscessos cutâneos recorrentes desde o 1º ano, dois abscessos hepáticos por S. aureus e pneumonia por Aspergillus. Primo materno com quadro semelhante. Hemograma: leucócitos 14.000 com neutrofilia. Biópsia de linfonodo: granulomas. Teste de DHR-123: oxidação ausente.",
q:[
{p:"Qual o diagnóstico e o defeito molecular?",r:"Doença granulomatosa crônica: defeito em genes do complexo NADPH oxidase de neutrófilos e macrófagos → ausência de espécies reativas de O2 (superóxido, H2O2) → falha microbicida."},
{p:"Por que os germes são catalase-positivos e fungos?",r:"Bactérias catalase-positivas (S. aureus) e fungos (Aspergillus) degradam o pouco H2O2 que produzem, de modo que o fagócito sem NADPH oxidase não consegue 'emprestar' o peróxido do micróbio para matá-lo."},
{p:"Por que se formam granulomas?",r:"O patógeno sobrevive e se acumula dentro do fagócito; linfócitos T tentam conter essas células formando granulomas, que defendem mas agridem o tecido (obstrução, inflamação crônica)."},
{p:"Por que o hemograma não ajuda e qual teste confirma?",r:"A falha é de função, não de número (neutrófilos normais ou altos). Confirma-se pela avaliação funcional: DHR-123 (citometria) ou NBT mostrando atividade reduzida."},
{p:"Compare com a deficiência de adesão leucocitária.",r:"Na DGC o neutrófilo chega e não mata: neutrofilia, abscessos (pus) e granulomas. Na LAD (CD18, fucose ou ativação de integrina) o neutrófilo nem chega ao tecido: leucocitose no sangue, ausência de pus, cicatrização ruim; LAD III também sangra."},
{p:"Qual o tratamento?",r:"Interferon-gama (ativa macrófagos M1 e neutrófilos, que ainda fazem NETose), antibióticos/antifúngicos profiláticos e, em alguns casos, transplante de medula óssea."}
]},
{id:"c6",a:"imuno",title:"O bebê do teste do pezinho",t:["i-idadapt"],
s:"Lactente de 5 meses, sexo masculino, com candidíase oral persistente, diarreia crônica, baixo ganho de peso e pneumonia intersticial. Após BCG, abscesso local e linfadenite disseminada. Exame: ausência de amígdalas e linfonodos palpáveis. Hemograma: linfócitos 450/mm³. Imunoglobulinas baixas. Citometria: CD3 ausente, CD19 presente, CD56 (NK) ausente.",
q:[
{p:"Qual o diagnóstico e a forma mais provável?",r:"Imunodeficiência combinada grave (SCID), fenótipo T⁻ B⁺ NK⁻, típico da forma ligada ao X por defeito na cadeia gama comum (γc)."},
{p:"Explique por que faltam T e NK e por que o B, embora presente, não funciona.",r:"A γc é compartilhada pelos receptores de IL-2, 4, 7, 9, 15 e 21. Sem receptor de IL-7 o T não amadurece; sem o de IL-15 a NK não se forma. O B amadurece, mas não recebe ajuda do T CD4 (troca de classe, plasmócitos), então não produz anticorpos adequados."},
{p:"Diferencie das outras causas de SCID.",r:"Deficiência de ADA: metabólitos tóxicos matam linfócitos → T⁻ B⁻ NK⁻. Defeito de recombinação V(D)J (RAG): T⁻ B⁻ NK⁺ (NK não precisa de rearranjo)."},
{p:"Como o diagnóstico poderia ter sido feito ao nascer?",r:"Triagem neonatal (teste do pezinho) com TRECs ausentes (marcadores de maturação do T), colhido até o 5º dia para não sofrer influência materna. Também linfopenia no hemograma, Ig baixas, citometria e teste genético."},
{p:"Por que a reação ao BCG?",r:"Vacina viva atenuada em paciente sem imunidade celular → disseminação. Vacinas vivas são contraindicadas na SCID."},
{p:"Qual o tratamento?",r:"Definitivo: transplante de medula óssea (melhor quanto mais precoce). Suporte: isolamento protetor, imunoglobulina intravenosa, profilaxia antimicrobiana, evitar vacinas vivas, hemocomponentes irradiados (evitar DECH); terapia gênica em alguns casos."}
]},
{id:"c7",a:"imuno",title:"Três crianças, três gamaglobulinas",t:["i-idadapt"],
s:"Três pacientes com infecções de repetição: (A) menino de 18 meses com otites, pneumonias e Giardia; amígdalas mínimas; CD19 ausente; IgG, IgA e IgM muito baixas. (B) menino de 3 anos com pneumonia por Pneumocystis e diarreia por Cryptosporidium; IgM elevada, IgG/IgA/IgE baixas. (C) mulher de 30 anos com sinusites, diarreia crônica e anemia hemolítica autoimune; B presentes; IgG e IgA baixas; resposta vacinal ruim.",
q:[
{p:"Qual o diagnóstico de cada um?",r:"(A) Agamaglobulinemia ligada ao X (Bruton). (B) Síndrome de hiper-IgM. (C) Imunodeficiência comum variável (CVID)."},
{p:"Explique o defeito de cada um.",r:"(A) Mutação em BTK (cromossomo X) → B não amadurece na medula → ausência de B e de todas as Ig. (B) Falha da troca de classe por defeito na interação CD40L (T CD4) – CD40 (B) (ou AID) → só IgM. (C) B não se diferencia em plasmócito produtor (causa heterogênea)."},
{p:"Por que A só ficou doente após os 6 meses?",r:"Até ~6 meses a IgG materna transferida pela placenta protege; quando ela acaba, aparece a deficiência de anticorpos."},
{p:"Por que as amígdalas de A são pequenas?",r:"Amígdalas e linfonodos são formados em grande parte por linfócitos B (folículos); sem B, são hipoplásicos."},
{p:"Que risco extra C tem?",r:"Autoimunidade, linfoproliferação, maior risco de linfoma e câncer gástrico."},
{p:"Como diferenciar de deficiência seletiva de IgA?",r:"Na deficiência de IgA só a IgA está muito baixa (<7 mg/dL), IgG e IgM normais/↑, resposta vacinal normal; a maioria é assintomática, com infecções de mucosa, giardíase, alergias e autoimunidade."}
]},
{id:"c8",a:"imuno",title:"O rim que não durou",t:["i-transplante"],
s:"Mulher, 45 anos, com doença renal crônica por nefropatia, mãe de 4 filhos e politransfundida, recebe rim de doador falecido ABO compatível com 2 mismatches HLA. Crossmatch negativo. Evolui bem, mas na 4ª semana tem elevação da creatinina; a biópsia mostra endotelialite e infiltrado intersticial de linfócitos; melhora com pulso de corticoide e ajuste de tacrolimus. Anos depois, abandona o tacrolimus e evolui com perda lenta da função; nova biópsia: espessamento concêntrico da íntima arterial, fibrose e atrofia tubular.",
q:[
{p:"Por que ela tinha risco de rejeição hiperaguda e como isso foi evitado?",r:"Gestações e transfusões sensibilizam contra HLA, gerando anticorpos pré-formados. Evitou-se com compatibilidade ABO (barreira absoluta) e crossmatch negativo (ausência de anticorpos anti-doador)."},
{p:"Classifique o episódio da 4ª semana e a via de alorreconhecimento predominante.",r:"Rejeição aguda (dias a semanas), celular (CD8 e CD4) e/ou humoral (anti-HLA de novo); via direta (APCs do doador apresentam MHC intacto) é o principal motor. Endotelialite e inflamação intersticial; frequentemente reversível."},
{p:"Classifique o quadro tardio e explique a patogenia.",r:"Rejeição crônica (meses a anos): via indireta (APC do receptor apresenta peptídeos do doador no próprio MHC), CD4 Th1 liberando IFN-γ, inflamação silenciosa → arteriosclerose do enxerto (espessamento concêntrico da íntima) → isquemia → fibrose e atrofia. Irreversível; ligada à suspensão do imunossupressor."},
{p:"Explique o mecanismo do tacrolimus e cite fármacos para os outros sinais.",r:"Sinal 1: TCR-MHC → Ca²⁺ → calcineurina → NFAT → IL-2. Tacrolimus e ciclosporina inibem a calcineurina. Sinal 2 (B7-CD28): belatacepte (CTLA4-Ig) → anergia. Sinal 3 (IL-2R → mTORC1): sirolimo, everolimo. Outros: azatioprina, globulina antitimócito, anti-CD3, anti-CD25, anti-CD40L, corticoides."},
{p:"Quais as 3 frentes efetoras contra o enxerto?",r:"CD4 Th1 (IL-2, IFN-γ, macrófagos M1 e NK — tipo IV); CD8 (perforina, granzima, Fas-FasL); B → aloanticorpos anti-HLA (complemento via clássica: C3a/C5a inflamação, C3b opsonização, MAC lise; ADCC por NK; macrófagos via FcγR)."},
{p:"Qual o risco de imunossupressão excessiva?",r:"Imunodeficiência secundária: infecções oportunistas graves e mais neoplasias (vírus oncogênicos, menor imunovigilância)."}
]},
{id:"c9",a:"int",title:"Tireoide: de quente a fria",t:["x-tireoide","p-trombose","p-embolia"],
s:"Duas pacientes. (A) Mulher, 34 anos, tabagista, com palpitações, tremor, perda de 8 kg, olhar fixo, exoftalmia bilateral e espessamento endurecido na região pré-tibial. Bócio difuso com sopro. TSH suprimido, T4 livre alto, TRAb positivo. Na emergência, ECG com fibrilação atrial. (B) Mulher, 52 anos, com cansaço, ganho de peso, intolerância ao frio, pele seca e bócio indolor, firme e simétrico. TSH 22, T4 livre baixo, anti-TPO muito elevado.",
q:[
{p:"Quais os diagnósticos?",r:"(A) Doença de Graves. (B) Tireoidite de Hashimoto."},
{p:"Explique o mecanismo imunológico de A.",r:"Hipersensibilidade tipo II estimuladora: IgG TSI/TRAb liga-se ao receptor de TSH e imita o TSH (ativa adenilato ciclase) → estímulo contínuo, bócio difuso, ↑ T3/T4. Não responde ao feedback negativo (o TSH cai, mas o anticorpo continua). Genes HLA-DR3, CTLA-4, PTPN22; tabagismo é gatilho."},
{p:"Explique a exoftalmia e o mixedema pré-tibial.",r:"Tecidos retro-orbitários e dérmicos têm receptor de TSH/reação cruzada. Th CD4 secretam citocinas → fibroblastos proliferam e produzem glicosaminoglicanos hidrofílicos. Exoftalmia: infiltração por T, edema/inflamação dos músculos extraoculares, acúmulo de GAG (ácido hialurônico, condroitina) e infiltração gordurosa. Pode persistir mesmo com o hipertireoidismo tratado."},
{p:"Explique o mecanismo imunológico de B.",r:"Principalmente tipo IV: IFN-γ induz MHC II e autofagia nos tireócitos → T CD4 Th1/Th17 → IFN-γ ativa macrófagos; CD8 matam células foliculares. Participação de anticorpos (tipo II): anti-TPO e anti-Tg com complemento e ADCC por NK. Resultado: ↓ T3/T4 → ↑ TRH e TSH."},
{p:"Compare a macro e a microscopia das duas glândulas.",r:"Graves: aumento difuso e simétrico (pode >80 g), corte carnudo vermelho-vivo; células foliculares altas formando papilas, coloide escasso, infiltrado linfoide com centros germinativos. Hashimoto: aumento difuso, cápsula íntegra, corte pálido castanho-amarelado, firme; infiltrado linfoplasmocitário com centros germinativos, folículos atróficos com células de Hürthle (metaplasia oxifílica), fibrose sem ultrapassar a cápsula."},
{p:"Qual o risco da fibrilação atrial em A?",r:"Estase no átrio esquerdo (tríade de Virchow) → trombo → embolia sistêmica para cérebro, rins, baço, membros → infarto (cérebro: necrose liquefativa; rim/baço: infarto branco)."},
{p:"B pode ter tido uma fase de hipertireoidismo? Como diferenciá-la de Graves?",r:"Sim: hashitoxicose, por ruptura de folículos e liberação de hormônio pré-formado. T4/T3 ↑ e TSH ↓, mas captação de iodo radioativo REDUZIDA (no Graves, aumentada) e TRAb negativo."}
]},
{id:"c10",a:"int",title:"Fadiga, língua lisa e perna inchada",t:["i-anemias","p-trombose","i-dai","x-tireoide"],
s:"Mulher, 58 anos, com hipotireoidismo por Hashimoto, refere fadiga intensa, parestesias em pés, glossite e palidez com leve icterícia. Hb 7,8 g/dL, VCM 121 fL, reticulócitos baixos, neutrófilos hipersegmentados, LDH e bilirrubina indireta levemente elevadas, B12 muito baixa, anticorpos anti-fator intrínseco positivos. Uma semana depois, apresenta TVP de membro inferior sem fator desencadeante evidente.",
q:[
{p:"Qual o tipo de anemia pelos critérios morfológico e fisiopatológico?",r:"Morfológico: macrocítica (VCM >100). Fisiopatológico: falta de produção (reticulócitos baixos): anemia megaloblástica por deficiência de B12, de causa autoimune (anemia perniciosa)."},
{p:"Por que as hemácias são grandes?",r:"Sem B12 (e/ou folato) o DNA dos precursores não duplica corretamente; o citoplasma cresce e há assincronia núcleo-citoplasma → células grandes (megaloblastos/macrócitos); neutrófilos hipersegmentados."},
{p:"Por que há LDH e bilirrubina indireta levemente elevadas?",r:"Eritropoese ineficaz: precursores defeituosos são destruídos na medula (hemólise intramedular), liberando LDH e heme que vira bilirrubina indireta."},
{p:"Por que a anemia perniciosa é autoimune e como se relaciona ao Hashimoto?",r:"Autoanticorpos contra fator intrínseco/células parietais (gastrite atrófica) → sem fator intrínseco a B12 não é absorvida no íleo. Doenças autoimunes órgão-específicas tendem a coexistir (predisposição genética comum: HLA, CTLA-4, PTPN22)."},
{p:"Explique a TVP.",r:"Deficiência de B12 → hiper-homocisteinemia adquirida → estresse oxidativo, inativação do óxido nítrico, inibição da trombomodulina e da fibrinólise → hipercoagulabilidade (tríade de Virchow)."},
{p:"Como a tratar e por que não basta B12 oral comum?",r:"Reposição de B12 injetável (ou sublingual), pois falta fator intrínseco e a absorção ileal está comprometida."}
]},
{id:"c11",a:"int",title:"A criança da anemia que dói",t:["i-anemias","p-infarto","i-idinata","p-trombose"],
s:"Menino, 6 anos, afrodescendente, com crises de dor óssea desde 1 ano, icterícia intermitente e duas internações por pneumonia pneumocócica. Hb 7,2 g/dL, VCM 86, reticulócitos 12%, bilirrubina indireta e LDH elevadas. Esfregaço com hemácias em foice. Ultrassom: baço pequeno e fibrótico. Aos 7 anos apresenta hemiparesia súbita.",
q:[
{p:"Qual o diagnóstico e o exame confirmatório?",r:"Anemia falciforme (HbSS). Confirmação por eletroforese de hemoglobina (banda de HbS, sem HbA). Triagem pelo teste do pezinho."},
{p:"Explique a base molecular da falcização.",r:"Mutação pontual na β-globina: ácido glutâmico → valina. A HbS desoxigenada (carga neutra) polimeriza em tactoides rígidos, deforma a membrana → drepanócito. Só ocorre na desoxigenação e não em todas as hemácias ao mesmo tempo."},
{p:"Classifique a anemia e justifique os reticulócitos.",r:"Normocítica, por destruição (hemolítica): hemácias rígidas e frágeis vivem 10–20 dias. A medula tem ferro, B12 e EPO, então responde com reticulocitose. BI e LDH ↑ pela hemólise."},
{p:"Explique as crises de dor e o AVC.",r:"Vaso-oclusão: drepanócitos ocluem capilares → isquemia e infartos (osso, cérebro). A anemia falciforme também é fator de risco de trombose. Infarto cerebral → necrose liquefativa."},
{p:"Por que o baço está pequeno e por que as pneumonias pneumocócicas?",r:"Infartos esplênicos repetidos (baço tem circulação terminal) → fibrose → autoesplenectomia. Sem baço há perda da filtração e da opsonofagocitose de bactérias encapsuladas (pneumococo, Hib, meningococo)."},
{p:"Por que os sintomas começaram depois dos 6 meses?",r:"Antes predominava a HbF (α2γ2); por volta dos 6 meses a cadeia γ é silenciada e a β ativada → passa a produzir HbS."}
]},
{id:"c12",a:"int",title:"Glúten, ferro e IgA",t:["i-dai","i-idadapt","i-anemias"],
s:"Menina, 10 anos, com diarreia crônica, distensão abdominal, baixa estatura e anemia microcítica que não melhora com sulfato ferroso oral. Mãe tem DM1. Ferritina baixa, CTLF alta. Anti-tTG IgA negativo. IgA sérica < 5 mg/dL, IgG e IgM normais. Biópsia duodenal: atrofia de vilosidades, hiperplasia de criptas e linfocitose intraepitelial.",
q:[
{p:"Qual o diagnóstico principal e a condição associada?",r:"Doença celíaca associada a deficiência seletiva de IgA."},
{p:"Explique a patogenia da doença celíaca.",r:"Glúten → gliadina (rica em glutamina e prolina, difícil digerir) → transglutaminase tecidual desamina → maior afinidade por HLA-DQ2/DQ8 nas APCs → T CD4 produzem IFN-γ e TNF-α e ajudam B (anti-tTG, antiendomísio, antigliadina). Componente inato: gliadina ativa epitélio e linfócitos intraepiteliais CD8 → dano epitelial, atrofia de vilosidades."},
{p:"Por que a sorologia foi negativa?",r:"Na deficiência de IgA, o anti-tTG da classe IgA não pode ser produzido → falso-negativo. Deve-se usar sorologia IgG (anti-tTG IgG ou antigliadina deaminada IgG) e/ou biópsia."},
{p:"Explique o perfil de ferro e a falha do ferro oral.",r:"Anemia ferropriva por má absorção duodenal (local de absorção do ferro): ferritina ↓ (estoque, primeiro a cair), CTLF ↑ (transferrina aumentada para captar ferro), microcitose, reticulócitos baixos. O ferro oral não é absorvido pela mucosa atrófica."},
{p:"Por que a mãe com DM1 é relevante?",r:"Doenças autoimunes compartilham predisposição (HLA-DQ2/DQ8 também associados ao DM1; PTPN22, CTLA-4); a celíaca é mais frequente em familiares de pacientes com DM1 e em quem tem deficiência de IgA."}
]},
{id:"c13",a:"pato",title:"Mãos frias e pele dura",t:["p-sjogren-esclero","p-autoimune"],
s:"Mulher, 44 anos, com episódios de dedos que ficam brancos, depois azuis e vermelhos no frio há 3 anos. Pele das mãos e antebraços endurecida e brilhante, dificuldade de fechar as mãos, úlceras nas pontas dos dedos, azia intensa e disfagia para sólidos. Recentemente, tosse seca e dispneia aos esforços. Anti-Scl-70 positivo.",
q:[
{p:"Qual o diagnóstico e qual o fenômeno digital?",r:"Esclerose sistêmica (esclerodermia) difusa. Fenômeno de Raynaud (vasculopatia digital, ~90% dos pacientes)."},
{p:"Explique a patogenia da fibrose.",r:"Lesão endotelial crônica → apoptose endotelial → tentativa de reparo que não para: desvio de Th1 para Th2 → IL-4 e IL-13 → macrófagos M2 → TGF-β → fibroblastos hiperativos/miofibroblastos → colágeno em excesso. Hipersensibilidade tipo IV (Th2)."},
{p:"Descreva a histologia da pele.",r:"Epiderme atrófica com apagamento das cristas; derme substituída por faixas espessas, avasculares e eosinofílicas de colágeno denso hialinizado; perda de anexos (folículos, glândulas sudoríparas, tecido adiposo) → esclerodactilia."},
{p:"Explique a disfagia e a azia.",r:"Atrofia e fibrose da camada muscular do esôfago (2/3 inferiores) → esôfago rígido → refluxo, risco de Barrett e estenose."},
{p:"Explique as úlceras digitais e cite a complicação renal temida.",r:"Vasculopatia obliterativa com hiperplasia concêntrica da íntima ('casca de cebola') → isquemia → úlceras. Rim: lesão das artérias interlobulares → crise renal esclerodérmica (hipertensão maligna, ~20%), sem lesão glomerular específica."},
{p:"Qual a principal causa de morte atual?",r:"Acometimento pulmonar: fibrose intersticial e hipertensão pulmonar."}
]},
{id:"c14",a:"int",title:"O ascítico febril",t:["p-edema","i-idinata","p-hemorragia"],
s:"Homem, 55 anos, etilista, com cirrose. Ascite volumosa, edema de MMII, circulação colateral abdominal, equimoses fáceis e gengivorragia. Albumina 2,1 g/dL, plaquetas 70.000, TP alargado. Internado por febre e dor abdominal; paracentese: líquido claro, proteína baixa, polimorfonucleares 450/mm³, cultura com E. coli.",
q:[
{p:"Explique os mecanismos da ascite.",r:"Fibrose hepática → hipertensão portal → ↑ pressão hidrostática nas veias esplâncnicas; fígado produz menos albumina → ↓ pressão oncótica. Somados, o plasma extravasa para a cavidade peritoneal (transudato). Retenção renal de sódio pelo SRAA agrava."},
{p:"Qual o diagnóstico infeccioso e sua patogenia?",r:"Peritonite bacteriana espontânea: a ascite (transudato) tem pouquíssima imunoglobulina e complemento; a congestão intestinal afrouxa a barreira epitelial e bactérias da flora (E. coli) translocam."},
{p:"Que conceito imunológico explica a maior suscetibilidade a infecções?",r:"Imunodeficiência secundária: o fígado produz as proteínas do complemento; doença hepática reduz complemento (opsonização por C3b, lise pelo MAC). Etilismo e desnutrição também contribuem."},
{p:"Explique as equimoses e a gengivorragia.",r:"Falha da hemostasia: o fígado produz fatores de coagulação (dependentes de vitamina K) → TP alargado (hemostasia secundária); plaquetopenia por hiperesplenismo (congestão esplênica pela hipertensão portal) → hemostasia primária (sangramento mucoso)."},
{p:"O edema dos MMII é transudato ou exsudato? Justifique.",r:"Transudato: desequilíbrio de pressões (↓ oncótica + retenção de sódio) com parede vascular íntegra; líquido claro, pobre em proteína, densidade <1,012."}
]},
{id:"c15",a:"imuno",title:"Fraqueza que piora à tarde",t:["i-dai","p-autoimune"],
s:"Mulher, 29 anos, com ptose palpebral e visão dupla que pioram no fim do dia, dificuldade para mastigar e engolir após refeições longas e voz anasalada após falar muito. Melhora com repouso. Anti-AChR positivo. TC de tórax: massa em mediastino anterior.",
q:[
{p:"Qual o diagnóstico e o tipo de hipersensibilidade?",r:"Miastenia gravis; hipersensibilidade tipo II (autoanticorpos contra receptor de acetilcolina da membrana pós-sináptica)."},
{p:"Quais os três mecanismos pelos quais o anti-AChR reduz a transmissão?",r:"(1) Bloqueio da ligação da acetilcolina ao receptor; (2) ligação cruzada/aglutinação e endocitose dos receptores → menos receptores disponíveis; (3) ativação do complemento (via clássica; IgG1/IgG3) → lesão da membrana pós-sináptica."},
{p:"Qual a provável massa mediastinal e por que importa?",r:"Timoma ou hiperplasia tímica — o timo disfuncional é gatilho da perda de tolerância (local de educação dos linfócitos T)."},
{p:"Quais outros autoanticorpos e genes?",r:"Anti-MuSK (5–10%) e anti-LRP4 (prejudicam organização da placa motora). Genes: HLA-DR3, CTLA-4, PTPN22."},
{p:"Por que a fraqueza piora com o esforço?",r:"A cada estímulo repetido há menos acetilcolina liberada e menos receptores funcionais; a margem de segurança da junção está reduzida, então a transmissão falha com o uso repetido e se recupera com repouso."}
]},
{id:"c16",a:"pato",title:"Edema de um lado, edema do corpo todo",t:["p-edema","p-hemorragia"],
s:"Compare quatro pacientes com edema: (1) homem com ICC: dispneia, ortopneia, estase jugular, hepatomegalia e edema de MMII com cacifo; (2) criança com kwashiorkor e anasarca; (3) mulher pós-mastectomia com braço endurecido sem cacifo; (4) homem com celulite em perna: área vermelha, quente, dolorosa e edemaciada.",
q:[
{p:"Classifique o mecanismo de edema de cada paciente.",r:"(1) ↑ pressão hidrostática (congestão sistêmica/pulmonar) + retenção renal de Na⁺ e água (SRAA). (2) ↓ pressão oncótica por falta de matéria-prima (aminoácidos) para albumina. (3) Obstrução linfática (linfedema). (4) ↑ permeabilidade vascular por inflamação."},
{p:"Quais produzem transudato e quais exsudato?",r:"Transudato: 1 e 2 (parede íntegra, pobre em proteína, densidade <1,012). Exsudato: 4 (rico em proteína e leucócitos, turvo, densidade >1,020). O linfedema (3) é rico em proteínas (não é transudato clássico)."},
{p:"Por que o paciente 1 tem estase jugular e hepatomegalia e que achado hepático crônico teria?",r:"Falência do VD → represamento no sistema venoso sistêmico. Congestão hepática crônica: necrose hemorrágica centrolobular + esteatose periportal → fígado em noz-moscada."},
{p:"No paciente 4, qual o nome da alteração vascular que dá vermelhidão e calor?",r:"Hiperemia ativa: dilatação arteriolar por mediadores inflamatórios → mais sangue oxigenado (rubor e calor); o edema associado é exsudato."},
{p:"Se o paciente 1 morresse, o que se veria no pulmão?",r:"Edema pulmonar (pulmões pesados, líquido espumoso) e, se crônico, induração marrom com células da insuficiência cardíaca (macrófagos com hemossiderina) e fibrose septal."}
]}
];
