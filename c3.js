const c3Questions = [
  // --- STRESS ---
  { q: "(a) In 2014/15 stress accounted for 43% of all working days lost due to ill health (HSE, 2015). With reference to this statistic, describe one biological and one individual difference explanation of stress. [15]", s: ["AO1", "AO2"], m: 15, year: "2017", behaviour: "Stress", topic: "Explanations", type: "Biological", scenario: "Yes" },
  { q: "(b) Evaluate two social psychological explanations of stress. [10]", s: ["AO3"], m: 10, year: "2017", behaviour: "Stress", topic: "Explanations", type: "Social Psychological", scenario: "No" },
  { q: "(a) Describe two biological explanations for stress. [10]", s: ["AO1"], m: 10, year: "2018", behaviour: "Stress", topic: "Explanations", type: "Biological", scenario: "No" },
  { q: "(b) Mehdi is highly stressed about his examinations, driving test and other personal issues. Various methods of modifying this behaviour have been suggested to him. Evaluate one method of modifying Mehdi's stress. [15]", s: ["AO2", "AO3"], m: 15, year: "2018", behaviour: "Stress", topic: "MoM", type: "N/A", scenario: "Yes" },
  { q: "Describe two individual differences explanations of stress. [10]", s: ["AO1"], m: 10, year: "2019", behaviour: "Stress", topic: "Explanations", type: "Individual Differences", scenario: "No" },
  { q: "‘Biological explanations of stress are limited.’ Evaluate biological explanations of stress with reference to this statement. [15]", s: ["AO2", "AO3"], m: 15, year: "2019", behaviour: "Stress", topic: "Explanations", type: "Biological", scenario: "Yes" },
  { q: "(a) Describe one individual differences explanation and one social psychological explanation of stress. [5 + 5]", s: ["AO1"], m: 10, year: "2020", behaviour: "Stress", topic: "Explanations", type: "N/A", scenario: "No" },
  { q: "(b) ‘No one method of modifying stress provides a clear solution to resolving the negative impact stress has on individuals.’ Evaluate methods of modifying stress with reference to this statement. [15]", s: ["AO2", "AO3"], m: 15, year: "2020", behaviour: "Stress", topic: "MoM", type: "N/A", scenario: "Yes" },
  { q: "(a) Describe the characteristics of stress. [10]", s: ["AO1"], m: 10, year: "2021", behaviour: "Stress", topic: "Characteristics", type: "N/A", scenario: "No" },
  { q: "(b) Briefly explain how biological explanations could be applied to modifying stress. [5]", s: ["AO2"], m: 5, year: "2021", behaviour: "Stress", topic: "MoM", type: "Biological", scenario: "No" },
  { q: "(c) Evaluate one individual differences explanation of stress. [10]", s: ["AO3"], m: 10, year: "2021", behaviour: "Stress", topic: "Explanations", type: "Individual Differences", scenario: "No" },
  { q: "(a) Toni is a professional musician who has started to show signs of stress, before and during live performances. Her symptoms, including sweaty palms, increased heart rate, anxiety, and low self-esteem, have been getting worse and may soon prevent her from doing her job. With reference to Toni, describe one method that a psychologist could use to modify Toni's symptoms of stress. [15]", s: ["AO1", "AO2"], m: 15, year: "2022", behaviour: "Stress", topic: "MoM", type: "N/A", scenario: "Yes" },
  { q: "(b) Evaluate two individual differences explanations of stress. [10]", s: ["AO3"], m: 10, year: "2022", behaviour: "Stress", topic: "Explanations", type: "Individual Differences", scenario: "No" },
  { q: "(a) Describe and evaluate one social psychological explanation of stress. [20]", s: ["AO1", "AO3"], m: 20, year: "2023", behaviour: "Stress", topic: "Explanations", type: "Social Psychological", scenario: "No" },
  { q: "(b) Briefly explain how individual differences explanations could be applied to modifying stress. [5]", s: ["AO2"], m: 5, year: "2023", behaviour: "Stress", topic: "MoM", type: "Individual Differences", scenario: "No" },
  { q: "(a) Describe one individual differences explanation of stress. [10]", s: ["AO1"], m: 10, year: "2024", behaviour: "Stress", topic: "Explanations", type: "Individual Differences", scenario: "No" },
  { q: "(b) Meera works as a trainee solicitor and feels under pressure to perform well in her assessments. In her spare time, Meera has taken part in swimming competitions and singing in concerts for several years. However, recently these activities have left Meera with unpleasant symptoms such as sweating, heart palpitations, anxiety and difficulty in sleeping. This is affecting her confidence. With reference to the above scenario, evaluate the effectiveness of beta blockers and stress inoculation training as methods of modifying Meera’s stress. [15]", s: ["AO2", "AO3"], m: 15, year: "2024", behaviour: "Stress", topic: "MoM", type: "N/A", scenario: "Yes" },

  // --- SCHIZOPHRENIA ---
  { q: "(a) Describe one method of modifying schizophrenia. [10]", s: ["AO1"], m: 10, year: "2017", behaviour: "Schizophrenia", topic: "MoM", type: "N/A", scenario: "No" },
  { q: "(b) ‘In recent years, social psychological explanations have been overshadowed by biological ones.’ Evaluate biological explanations of schizophrenia with reference to this statement. [15]", s: ["AO2", "AO3"], m: 15, year: "2017", behaviour: "Schizophrenia", topic: "Explanations", type: "Biological", scenario: "Yes" },
  { q: "Ronald has not been feeling the same lately. He told his friend Rory what he has been experiencing. Rory suggested that the behaviours Ronald is showing could be characteristics of schizophrenia. Describe the characteristics of schizophrenia that Ronald may have told Rory he was experiencing. [10]", s: ["AO1", "AO2"], m: 10, year: "2018", behaviour: "Schizophrenia", topic: "Characteristics", type: "N/A", scenario: "Yes" },
  { q: "Evaluate social psychological explanations of schizophrenia. [15]", s: ["AO3"], m: 15, year: "2018", behaviour: "Schizophrenia", topic: "Explanations", type: "Social Psychological", scenario: "No" },
  { q: "(a) Evaluate two individual differences explanations of schizophrenia. [10]", s: ["AO3"], m: 10, year: "2019", behaviour: "Schizophrenia", topic: "Explanations", type: "Individual Differences", scenario: "No" },
  { q: "(b) Edna is trying to understand what might have caused her to have schizophrenia. Her symptoms include hearing voices, being paranoid, disordered thinking and being less sociable. In a session with her psychologist, biological explanations were discussed. Describe one biological explanation for schizophrenia, making reference to Edna's symptoms in your answer. [15]", s: ["AO1", "AO2"], m: 15, year: "2019", behaviour: "Schizophrenia", topic: "Explanations", type: "Biological", scenario: "Yes" },
  { q: "Describe one biological explanation and one individual differences explanation of schizophrenia. [5 + 5]", s: ["AO1"], m: 10, year: "2020", behaviour: "Schizophrenia", topic: "Explanations", type: "N/A", scenario: "No" },
  { q: "‘Social psychological explanations provide the most convincing account of schizophrenia.’ Evaluate social psychological explanations of schizophrenia with reference to the statement. [15]", s: ["AO2", "AO3"], m: 15, year: "2020", behaviour: "Schizophrenia", topic: "Explanations", type: "Social Psychological", scenario: "Yes" },
  { q: "(a) Describe social psychological explanations of schizophrenia. [10]", s: ["AO1"], m: 10, year: "2021", behaviour: "Schizophrenia", topic: "Explanations", type: "Social Psychological", scenario: "No" },
  { q: "(b) ‘Schizophrenia is too complex to be treated by one single method of modification.’ Evaluate cognitive behavioural therapy as a method of modifying schizophrenia with reference to this statement. [15]", s: ["AO2", "AO3"], m: 15, year: "2021", behaviour: "Schizophrenia", topic: "MoM", type: "N/A", scenario: "Yes" },
  { q: "(a) Describe one social psychological explanation of schizophrenia. [10]", s: ["AO1"], m: 10, year: "2022", behaviour: "Schizophrenia", topic: "Explanations", type: "Social Psychological", scenario: "No" },
  { q: "(b) Over the last six months, Charlie has shown instances of disordered thinking and flatness of affect when carrying out activities. Charlie's behaviours, including hearing voices, have led to a diagnosis of schizophrenia. Evaluate the effectiveness of one method for modifying Charlie’s schizophrenia. [15]", s: ["AO2", "AO3"], m: 15, year: "2022", behaviour: "Schizophrenia", topic: "MoM", type: "N/A", scenario: "Yes" },
  { q: "(a) Evaluate one explanation of schizophrenia. [10]", s: ["AO3"], m: 10, year: "2023", behaviour: "Schizophrenia", topic: "Explanations", type: "N/A", scenario: "No" },
  { q: "(b) Alia displays unusual behaviours; she also has disordered thinking, delusions and hallucinations (hearing voices). These symptoms led to a diagnosis of schizophrenia. She was initially given antipsychotic medication, but still has some distressing symptoms. Describe how cognitive behavioural therapy could be used to modify Alia’s behaviours. [15]", s: ["AO1", "AO2"], m: 15, year: "2023", behaviour: "Schizophrenia", topic: "MoM", type: "N/A", scenario: "Yes" },

  // --- ADDICTION ---
  { q: "(a) Describe one social psychological explanation for addictive behaviours. [10]", s: ["AO1"], m: 10, year: "2017", behaviour: "Addiction", topic: "Explanations", type: "Social Psychological", scenario: "No" },
  { q: "(b) Laurence is a young apprentice working at a garage. Whenever the mobile tool seller arrives Laurence just has to buy tools for himself. He can barely afford the tools he yet, he has to continue buying. Laurence is referred by his doctor to a psychologist for treatment. Evaluate one method of modifying his behaviour. [15]", s: ["AO2", "AO3"], m: 15, year: "2017", behaviour: "Addiction", topic: "MoM", type: "N/A", scenario: "Yes" },
  { q: "(a) Natalie likes going to the casino. At first she would go only once a month. Now she goes at least four times a week. She realises she has an addiction to gambling, and is seeking help. Her psychologist has suggested a number of different methods of modifying this behaviour. Describe one method of modifying addictive behaviour with reference to Natalie. [10]", s: ["AO1", "AO2"], m: 10, year: "2018", behaviour: "Addiction", topic: "MoM", type: "N/A", scenario: "Yes" },
  { q: "(b) Evaluate two individual differences explanations of addictive behaviour. [15]", s: ["AO3"], m: 15, year: "2018", behaviour: "Addiction", topic: "Explanations", type: "Individual Differences", scenario: "No" },
  { q: "(a) Describe the characteristics of addictive behaviours. [10]", s: ["AO1"], m: 10, year: "2019", behaviour: "Addiction", topic: "Characteristics", type: "N/A", scenario: "No" },
  { q: "(b) Nigel works with people with a variety of addictive behaviours. One of his clients, Richard, has read about individual differences explanations and believes they fully explain his addiction. Nigel disagrees. Evaluate individual differences explanations of addictive behaviours with reference to Nigel and Richard. [15]", s: ["AO2", "AO3"], m: 15, year: "2019", behaviour: "Addiction", topic: "Explanations", type: "Individual Differences", scenario: "Yes" },
  { q: "(a) ‘Methods of modifying addictive behaviours are often controversial yet always effective.’ With reference to this statement evaluate aversion therapy as a method of modifying addictive behaviours. [15]", s: ["AO2", "AO3"], m: 15, year: "2020", behaviour: "Addiction", topic: "MoM", type: "N/A", scenario: "Yes" },
  { q: "(b) Describe one individual differences explanation of addictive behaviours. [10]", s: ["AO1"], m: 10, year: "2020", behaviour: "Addiction", topic: "Explanations", type: "Individual Differences", scenario: "No" },
  { q: "(a) Describe one biological explanation of addictive behaviours. [10]", s: ["AO1"], m: 10, year: "2021", behaviour: "Addiction", topic: "Explanations", type: "Biological", scenario: "No" },
  { q: "(b) ‘Social psychological explanations are ineffective in providing a clear explanation for addictive behaviours.’ With reference to this statement, evaluate social psychological explanations of addictive behaviours. [15]", s: ["AO2", "AO3"], m: 15, year: "2021", behaviour: "Addiction", topic: "Explanations", type: "Social Psychological", scenario: "Yes" },
  { q: "Abiya's friends are concerned about a recent change in her mood, appearance and ability to make sensible decisions. Abiya frequently asks to borrow money from them that she has become addicted to. Evaluate how agonist and antagonist substitution could be used as a method to help modify Abiya's addictive behaviours. [15]", s: ["AO2", "AO3"], m: 15, year: "2022", behaviour: "Addiction", topic: "MoM", type: "Biological", scenario: "Yes" },
  { q: "Describe how one social psychological explanation helps us to understand addictive behaviours. [10]", s: ["AO1", "AO2"], m: 10, year: "2022", behaviour: "Addiction", topic: "Explanations", type: "Social Psychological", scenario: "No" },
  { q: "Jenna’s family are worried about her vaping and are concerned that she has prioritised this over other parts of her life. Jenna’s mood has recently varied, and she experiences highs when vaping. Jenna has found she must vape more frequently to satisfy her needs. Since vaping more frequently, Jenna has become more irritable and has problems sleeping and she is now worried about this affecting her performance in her new job. Describe how the characteristics of addictive behaviours can help to explain Jenna’s behaviour. [15]", s: ["AO1", "AO2"], m: 15, year: "2024", behaviour: "Addiction", topic: "Characteristics", type: "N/A", scenario: "Yes" },

  // --- CONTROVERSIES (ESSAYS) ---
  // --- SCIENTIFIC STATUS ---
  { 
    q: "Scientific status 'Psychology is a science.' Using your knowledge of psychology, discuss the extent to which this statement is true. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2017", behaviour: "Controversy", topic: "Essay", 
    contro: "scientific status" 
  },
  { 
    q: "Scientific status 'Psychology can never have scientific status because of the methodologies used by various approaches.' Discuss to what extent you agree with this statement. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2019", behaviour: "Controversy", topic: "Essay", 
    contro: "scientific status" 
  },
  { 
    q: "Scientific status 'The changing nature of 'science' has made it difficult to establish the scientific status of psychology.' To what extent do you agree with this statement? Justify your answer using psychological knowledge. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2023", behaviour: "Controversy", topic: "Essay", 
    contro: "scientific status" 
  },
  { 
    q: "Using your knowledge of psychology, discuss the extent to which the statement 'Psychology is a science' is true. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2024", behaviour: "Controversy", topic: "Essay", 
    contro: "scientific status" 
  },

  // --- ETHICAL COST OF CONDUCTING RESEARCH ---
  { 
    q: "Ethical costs of conducting research 'Psychological research continues to involve ethical costs to society and individual human participants.' To what extent do you agree with this statement? Justify your answer. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2017", behaviour: "Controversy", topic: "Essay", 
    contro: "ethical cost of conducting research" 
  },
  { 
    q: "Ethical costs of conducting research 'Psychologists endeavour to make sure that there are minimal ethical costs of their research on humans.' Discuss the extent to which you agree with this statement. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2021", behaviour: "Controversy", topic: "Essay", 
    contro: "ethical cost of conducting research" 
  },
  { 
    q: "Ethical costs of conducting research 'The benefits to society and the economy of psychological research outweigh any potential negative ethical consequences.' To what extent do you agree with this statement? Justify your answer using psychological knowledge. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2022", behaviour: "Controversy", topic: "Essay", 
    contro: "ethical cost of conducting research" 
  },
  { 
    q: "Ethical costs 'Risk management techniques, such as ethical guidelines, are really useful as they allow the psychologist to conduct research that avoids potentially negative consequences for society.' With reference to the above statement, discuss risk management techniques used by psychologists. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2025", behaviour: "Controversy", topic: "Essay", 
    contro: "ethical cost of conducting research" 
  },

  // --- CULTURAL BIAS ---
  { 
    q: "Cultural bias 'Psychological research is culturally biased.' Using your knowledge of psychology, discuss the extent to which this statement is true. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2018", behaviour: "Controversy", topic: "Essay", 
    contro: "cultural bias" 
  },
  { 
    q: "Cultural bias 'Cross cultural studies remove cultural bias from psychology.' Using your knowledge of psychology, discuss the extent to which this statement is true. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2021", behaviour: "Controversy", topic: "Essay", 
    contro: "cultural bias" 
  },
  { 
    q: "Cultural bias 'An overreliance on research subjects (participants) from the U.S. and other Western nations can produce false claims about human psychology and behaviour.' (adapted from www.sciencedaily.com/releases/2010/06/100630132850.htm) Using your knowledge of cultural bias in psychology, discuss the extent to which this statement is true. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2022", behaviour: "Controversy", topic: "Essay", 
    contro: "cultural bias" 
  },
  { 
    q: "Cultural Bias 'Ethnocentrism is a problem in psychology.' Using your knowledge of psychology, discuss the extent to which this statement is true. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2024", behaviour: "Controversy", topic: "Essay", 
    contro: "cultural bias" 
  },

  // --- GENDER BIAS (SEXISM) ---
  { 
    q: "Sexism 'Psychology continues to suffer from sexism.' Using your knowledge of psychology, discuss the extent to which this statement is true. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2019", behaviour: "Controversy", topic: "Essay", 
    contro: "gender bias" 
  },
  { 
    q: "Sexism 'Women in psychology have gone from a position of invisibility to one of influence.' Discuss the extent to which you agree with this statement. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2020", behaviour: "Controversy", topic: "Essay", 
    contro: "gender bias" 
  },
  { 
    q: "Sexism 'When psychological research is conducted today, we can be certain that any gender differences found are real and are not the result of gender bias.' Using your knowledge of psychology, to what extent do you agree with this statement? [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2023", behaviour: "Controversy", topic: "Essay", 
    contro: "gender bias" 
  },
  { 
    q: "Sexism 'Many psychological approaches have been criticised for having a gender bias and being heterosexist.' Using your knowledge of psychology, to what extent do you agree with this statement? [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2025", behaviour: "Controversy", topic: "Essay", 
    contro: "gender bias" 
  },

  // --- NON-HUMAN ANIMALS ---
  { 
    q: "Non-human animals 'Using non-human animals in psychology is useful but also problematic.' To what extent do you agree with this statement? Justify your answer using your psychological knowledge. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2018", behaviour: "Controversy", topic: "Essay", 
    contro: "non-human animals" 
  },
  { 
    q: "Non-human animals 'Using non-human animals in psychology is unavoidable.' Using your knowledge of psychology, discuss the extent to which this statement is true. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2020", behaviour: "Controversy", topic: "Essay", 
    contro: "non-human animals" 
  },
  { 
    q: "Non-human animals 'Non-human animals should be used as a therapeutic device and in any psychological research that benefits humans.' To what extent do you agree with the statement? Justify your answer using psychological knowledge. [25]", 
    s: ["AO2", "AO3"], m: 25, year: "2024", behaviour: "Controversy", topic: "Essay", 
    contro: "non-human animals" 
  }
];