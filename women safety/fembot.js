const utterances = [
    ["hi!","hey","Heya","Hey","hello","Hello","HELLO","hi bot","hi","Hi"],
    ["how are you","what's up"],
    ["bye"],
    ["who are you","what is your role","what do you work","what can you do","about you","know more about you","can i know more about you"],
    ["what is your name"],
    ["how can I get numbers of any professionals","how can I get help","how can you help"],
    ["Can i volunteer for this mission","can i help you"],
    ["can I know more about this"],
    ["what knowledge do you have","what can you do"],
    ["who developed you","who made you","who created you"],
    ["what are you doing","what are you upto"],
    ["Thanks","THANKS","thank you","thanks"],
    ["yes","yeah","happy","good","well"],
    ["are you human","are you a robot?"],
    ["which languages can you speak?"],
    ["where do you live?"],
    ["are you expensive?"],
    ["no","No"],
    ["helpline","HELPLINE","HELP","help"],
    ["can i know any self-defence techniques","self-defence","can i know about self-defence","self-defence techniques"],
    ["tips to overcome depression"],
    ["can you suggest some safety tips","safety tips"],
    ["tips for cyber security","cyber security"],
    ["health tips","health related tips "]
    
    ];
    const replies = [
    ["hi! How can I help you","Hey, How can I help you","Heya, How can I help you","Hey,How can I help you","Hello, How can I help you"],
    ["I'm good.How are you? Hope you are safe"],
    ["Bye,stay safe"],
    ["FemCare is a an assistant of women and child development,Govt. of India working as an initiative to aid technology that contributes to the global movement of women safety. It is an effort, a process, to uplift the conditions and status of women. Making a country feel like home, where women feel safe. Our web/app focuses on making women aware of menstrual health and taking stringent steps for protecting women against physical and mental violence and discrimination. We aim to provide them a safe space where they can reach counsellors, lawyers or have women to women conversations.You can know me more by clicking on the Home section to your left"],
    ["I'm a robot.You may call me Aapka Sahayak"],
    ["You may find helpline and contact details of women safety team in our website."],
    ["Yes, you may volunteer by consulting women with certain issues if you are a verified doctor/lawyer or counsellor(only women). Thank You"],
    ["Yeah sure, You may visit our website for more details"],
    ["Well, I can guide you on topics such as self-defence,health related issues and provide you with details of our verified doctors, lawyers and counsellors to connect with them."],
    ["I was developed by Meta Hackers."],
    ["I am here to help you. Your safety is my priority"],
    ["Your most welcome"],
    ["Good to hear that"],
    ["I am a robot!"],
    ["I speak English."],
    ["I live right here on web"],
    ["No, I am not..chill"],
    ["okay"],
    ["Please click on the HELPLINE link to your left."],
    ["You may refer to the self-defence section at our home page."],
    ["1.Find small ways to be of service to others.2.Find workable goals that give you a sense of accomplishment.3.Schedule pleasant activities or events.4.Stay in the present eat right too.5.Relationships: Focus on people who lift you up.6.Try to keep a regular sleep schedule."],
    ["1.Have a Plan:When you are going out, whether it be alone or with a group of friends, it is best to have a plan in place. Knowing your surroundings, such as who and what is in the immediate area, is one of the most crucial safety tips to remember.2.Ping Your Location 3. Tools for Self-Defense :Items such as pepper spray, a safety whistle, and a mini flashlight, are great options to have on hand when going out.4.Create Boundaries:Regardless if you are out alone or with a group of friends, if you ever feel uncomfortable or unsafe with any attention towards you, do not be afraid to put distance between yourself and the individual."],
    ["1.Don’t share passwords.2. Don’t leave your webcam connected.3. Don’t share more than necessary.4. Don’t meet online acquaintances alone.5. Block people you don’t want to interact with"],
    ["1. Follow a well balanced Diet plan.2. Exercise each day for a minimum of thirty minutes","3. Taking measures to maintain a proper Body Mass Index (BMI)","4.Drinking plenty of Water each day","5.Prevention of Health risks by making regular Doctor appointments"]
    
  ];
  const alternative = [
    "I am unable to process. PLEASE contact helpline in case of emergency. You can see helpline section to the left. ",
  ];
  const messagerForm = get(".messager-inbox");
  const messagerInput = get(".messager-input");
  const messagerChat = get(".messager-forchat");
  const logo_img = "FemCarelogo.png";
  const logo_name = "Bot";
  const me_img = "person.png";
  const me_name = "Me";
  const robot = ["How do you do, fellow human", "I am not a bot"];
  messagerForm.addEventListener("submit", event => 
  {
    event.preventDefault();
    const msgText = messagerInput.value;
    if (!msgText) return;
    messagerInput.value = "";
    addChat(me_name, me_img, "right", msgText);
    output(msgText);
  });
  function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")  
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/there/g, "there is")
      .replace(/r u/g, "are you");
    if (compare(utterances, replies, text)) 
    {
      product = compare(utterances, replies, text);
    }
     else if (text.match(/thank/gi)) 
     {
      product = "You're welcome!"
    }
     else if (text.match(/(robot|bot|robo)/gi)) 
     {
      product = robot[Math.floor(Math.random() * robot.length)];
    }
     else 
     {
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
    const delay = input.split(" ").length * 100;
    setTimeout(() => {
      addChat(logo_name, logo_img, "left", product);
    }, delay);
  }
  function compare(utterancesArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < utterancesArray.length; x++) {
      for (let y = 0; y < utterancesArray[x].length; y++) {
        if (utterancesArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          break;
        }
      }
      if (replyFound) {
        break;
      }
    }
    return reply;
  }
  function addChat(name, img, side, text) {
    const msgHTML = `
      <div class="msg ${side}-msg">
      <div class="msg-pic" style="background-image: url(${img})"></div>
      <div class="msg-box">
      <div class="msg-maintitle">
      <div class="msg-maintitle-name">${name}</div>
      <div class="msg-info-time">${formatDate(new Date())}</div></div>
      <div class="msg-pop">${text}</div>
      </div>
      </div>
    `;
    messagerChat.insertAdjacentHTML("beforeend", msgHTML);
    messagerChat.scrollTop += 500;
  }
  function get(selector, root = document) {
    return root.querySelector(selector);
  }
  function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();
    return `${h.slice(-2)}:${m.slice(-2)}`;
  }
  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }