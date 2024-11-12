import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  elementDialog!: any;
  viewText = '';
  hasInitial = true;
  hasScore = false;
  hasCreditos = false;

  countScore = 0;
  countQuestions = 0;

  array = [
    {
      id: 1,
      character: "Psicólogo(a)",
      text: 'Olá, João! É muito bom te ver por aqui. O que você gostaria de compartilhar hoje?',
      options: [
        {
          label: 'Prosseguir',
          action: 'next',
          redirect: 2
        },
      ]
    },
    {
    id:2,
    character: "João",
    text: 'Então, eu queria falar sobre algo que aconteceu na escola.',
    options: [
      {
        label: 'Prosseguir',
        action: 'next',
        redirect: 3
      },
    ]
  },
  {
    id: 3,
    character: "João",
    text: `Eu sempre usei meu colar de contas do Candomblé, que faz parte da minha religião e da minha família. Só que, na última aula de história, o professor falou das religiões de matriz africana como se fossem só superstição, como se não tivessem valor. Me senti muito mal, sabe?`,
    options: [
      {
        label: 'Prosseguir',
        action: 'next',
        redirect: 4
      },
    ]
  },
  {
    id: 4,
    character: "",
    text: `Escolha a resposta que a Psicóloga deve usar`,
    options: [
      {
        label: `- João, uma opção seria você começar a levar um tambor pra sala e tocar toda vez que o professor fizer esses comentários.`,
        action: 'answer',
        correct: false,
        redirect: 7
      },
      {
        label: `- Bom, João, talvez fosse mais
        fácil se você evitasse usar o
        colar de contas na escola.
        Assim, você não chamaria
        tanta atenção para a sua
        religião e poderia evitar
        situações como essa.
        `,
        action: 'answer',
        correct: false,
        redirect: 6
      },
      {
        label: `- João, o que o professor disse
        foi desrespeitoso. Pelo
        Estatuto da Criança e do
        Adolescente, a escola deve
        respeitar a sua cultura, sua
        religião e a sua identidade.
        Então, você tem todo o direito
        de se expressar e ser
        valorizado pelo que acredita.
        `,
        action: 'answer',
        correct: true,
        redirect: 5
      },


    ]
  },
  {
    id: 5,
    character: "Psicólogo(a)",
    text: `João, o que o professor disse foi desrespeitoso. Pelo Estatuto da Criança e do Adolescente, a escola deve respeitar a sua cultura, sua religião e a sua identidade. Então, você tem todo o direito de se expressar e ser valorizado pelo que acredita.`,
    options: [
      {
        label: 'Prosseguir',
        action: 'next',
        redirect: 8
      },
    ],
  },
  {
    id: 6,
    character: "Psicólogo(a)",
    text: `Bom, João, talvez fosse mais fácil se você evitasse usar o colar de contas na escola. Assim, você não chamaria tanta atenção para a sua religião e poderia evitar situações como essa.`,
    options: [
      {
        label: 'Prosseguir',
        action: 'next',
        redirect: 9
      },
    ],
  },
  {
    id: 7,
    character: "Psicólogo(a)",
    text: `João, uma opção seria você começar a levar um tambor pra sala e tocar toda vez que o professor fizer esses comentários.`,
    options: [{
      label: 'Prosseguir',
      action: 'next',
      redirect: 10
      }
    ],
  },
  {
    id: 8,
    character: "João",
    text: `Legal saber que existe o ECA pra proteger meus direitos. Se eu tenho esse direito, então eu não posso deixar que ele me desrespeite assim.`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 11
      }
    ]
  },
  {
    id: 9,
    character: "João",
    text: `Então… mas eu acho que não é justo eu ter que esconder o que eu acredito só pra não incomodar as outras pessoas, sabe?`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 11
      }
    ]
  },
  {
    id: 10,
    character: "João",
    text: `Essa ideia é boa! Ia ser engraçado ver a cara do professor! Mas acho que no fim das contas não ia resolver nada. Só ia piorar as coisas.`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 11
      }
    ]
  },
  {
    id: 11,
    character: "João",
    text: `Além disso, eu quis fazer uma apresentação sobre o Candomblé numa atividade cultural, mas a escola não deixou. Disseram que o tema era polêmico e que poderia incomodar outras pessoas. Fiquei muito chateado...`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 12
      }
    ]
  },
  {
    id: 12,
    character: "",
    text: `Escolha a resposta que a Psicóloga deve usar`,
    options: [
      {
        label: `- De fato, uma
        apresentação sobre o
        Candomblé seria um assunto
        desconfortável para algumas
        pessoas, além de ser um tema
        que muitos podem não aceitar.
        Foi melhor assim! É melhor
        deixar isso de lado e apenas
        aceitar.
        `,
        action: 'answer',
        correct: false,
        redirect: 14
      },
      {
        label: `- A escola não poderia
        barrar sua apresentação sobre
        o Candomblé. Quando eles
        fazem isso, estão negando
        seu direito de valorizar e
        compartilhar sua cultura. O
        Candomblé faz parte da
        história e da cultura brasileira.
        Você tem o direito de
        aprender, praticar e falar sobre
        isso.
        `,
        action: 'answer',
        correct: true,
        redirect: 13
      },

      {
        label: `- Você que dita as
        regras, ninguém precisava
        saber o que você estava
        planejando. Bastava apenas
        chegar no dia da
        apresentação e falar sobre o
        Candomblé, eles não teriam
        escolha a não ser ouvir!
        `,
        action: 'answer',
        correct: false,
        redirect: 15
      },

    ]
  },
  {
    id: 13,
    character: "Psicólogo(a)",
    text: `A escola não poderia barrar sua apresentação sobre o Candomblé. Quando eles fazem isso, estão negando seu direito de valorizar e compartilhar sua cultura. O Candomblé faz parte da história e da cultura brasileira. Você tem o direito de aprender, praticar e falar sobre isso.`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 16
      }
    ]
  },
  {
    id: 14,
    character: "Psicólogo(a)",
    text: `De fato, uma apresentação sobre o Candomblé seria um assunto desconfortável para algumas pessoas, além de ser um tema que muitos podem não aceitar. Foi melhor assim! É melhor deixar isso de lado e apenas aceitar.`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 17
      }
    ]
  },

  {
    id: 15,
    character: "Psicólogo(a)",
    text: `Você que dita as regras, ninguém precisava saber o que você estava planejando. Bastava apenas chegar no dia da apresentação e falar sobre o Candomblé, eles não teriam escolha a não ser ouvir!`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 18
      }
    ]
  },

  {
    id: 16,
    character: "João",
    text: `Nossa, é bom ouvir isso. Eu achava que a escola podia fazer isso, mas agora vejo que tenho esse direito. Vou pensar em como falar com eles sobre isso.`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 19
      }
    ]
  },
  {
    id: 17,
    character: "João",
    text: `Ah, eu estava tão empolgado para apresentar minha religião… essa situação me deixa tão triste…`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 22
      }
    ]
  },
  {
    id: 18,
    character: "João",
    text: `Às vezes eu tenho vontade de fazer as coisas assim impulsivamente... Essa situação me deixou realmente chateado, mas acho que agir dessa maneira apenas me deixaria como o errado da história.`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 22
      }
    ]
  },
  {
    id: 19,
    character: "",
    text: `Escolha a resposta que a Psicóloga deve usar`,
    options: [
      {
        label: `- João, além de ter sofrido preconceito pela sua religião, você também foi tratado de
          forma desigual em relação aos outros alunos. Todos os estudantes têm o direito de serem
          respeitados e valorizados, independente das crenças que seguem.
        `,
        action: 'answer',
        correct: true,
        redirect: 20
      },
    ]
  },
  {
    id: 20,
    character: "Psicólogo(a)",
    text: `João, além de ter sofrido preconceito pela sua religião, você também foi tratado de forma desigual em relação aos outros alunos. Todos os estudantes têm o direito de serem respeitados e valorizados, independente das crenças que seguem.`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 21
      }
    ]
  },
  {
    id: 21,
    character: "João",
    text: `Estou surpreso!`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 22
      }
    ]
  },
  {
    id: 22,
    character: "João",
    text: `Eu queria fazer alguma coisa a respeito disso, mas não sei bem o que posso fazer.`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 23
      }
    ]
  },
  {
    id: 23,
    character: "",
    text: `Escolha a resposta que a Psicóloga deve usar`,
    options: [
      {
        label: `- Olha, João, acho que um bom começo seria você conversar com seus pais sobre isso. Eles
          podem te ajudar a tomar algumas atitudes. Vale tentar falar com a direção da escola também,
          explicando o que aconteceu e mostrando que você tem o direito de ser respeitado.
        `,
        action: 'answer',
        correct: true,
        redirect: 24
      },
    ]
  },
  {
    id: 24,
    character: "Psicólogo(a)",
    text: `Olha, João, acho que um bom começo seria você conversar com seus pais sobre isso. Eles podem te ajudar a tomar algumas atitudes. Vale tentar falar com a direção da escola também, explicando o que aconteceu e mostrando que você tem o direito de ser respeitado.`,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 25
      }
    ]
  },
  {
    id: 25,
    character: "Psicólogo(a)",
    text: `Se for necessário, você pode procurar o Conselho Tutelar. Eles estão lá pra garantir os direitos das crianças e dos adolescentes, então eles podem dar suporte nessa situação.
      `,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 26
      }
    ]
  },
  {
    id: 26,
    character: "João",
    text: `Nossa, eu não sabia que tinha todos esses caminhos pra seguir. Vou conversar com meus pais e explicar a situação. Acho que eles podem me ajudar a falar com a direção da escola e até buscar o Conselho Tutelar, se for preciso. Valeu pela orientação! Isso me fez perceber que não tô sozinho e que posso lutar pelo que acredito.
      `,
    options: [ {
      label: 'Prosseguir',
      action: 'next',
      redirect: 27
      }
    ]
  },
  {
    id: 27,
    character: "",
    text: ``,
    options: [ {
      label: 'Ver Pontuação',
      action: 'score',
      redirect: 28
      },
      {
        label: 'Recomeçar',
        action: 'next',
        redirect: 0
      }
    ]
  },
  {
    id: 28,
    character: "",
    text: ``,
    options: [
      {
        label: 'Recomeçar',
        action: 'next',
        redirect: 0
      },
      {
        label: 'Voltar',
        action: 'next',
        redirect: 27
      }
    ]
  },


  ];

  hasCompleted: boolean = true;

  ngOnInit(): void {
    this.hasInitial = true;
  }

  next(action:any){
    this.hasScore = false;
    // this.hasCreditos = false;
    if(!this.hasCompleted){
      this.hasCompleted = true;
      this.viewText = this.elementDialog.text;
      return;
    }

    if(action.action == 'next'){
      this.nextElement(action.redirect);
    } else if(action.action == 'score'){
      this.hasScore = true;
      this.nextElement(action.redirect);
    } else if(action.action == 'answer'){
      if(action.correct){
        this.countScore++;
      }
      this.countQuestions++;
      this.nextElement(action.redirect);
    }
  }

  nextElement(id: number){

    if(id == 0){
      this.viewText = '';
      this.elementDialog = null;
      this.hasScore = false;
      this.hasInitial = true;
      this.countQuestions = 0;
      this.countScore = 0;
      this.hasCompleted = true;
      return
    }

    if(id == 27){
      this.hasCreditos = true;
    } else {
      this.hasCreditos = false;
    }
    this.viewText = '';
    this.hasCompleted = false;
    this.elementDialog = this.array.find(item => item.id == id);
    setTimeout(()=> {
      this.recursiveText(this.elementDialog.text);
    }, 50);

  }

  recursiveText(text: string, ){

    if(this.viewText.length == text.length){
      this.hasCompleted = true;
      return
    }

    this.viewText = text.slice(0, this.viewText.length +1)
    setTimeout(()=> {
      this.recursiveText(text);
    }, 50)

  }

  newGame(){
    this.hasInitial = false;
    this.nextElement(1)
  }
}
