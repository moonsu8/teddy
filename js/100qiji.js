var qiji = [
	["1","22","你是学生吗？","nǐ shì xué shēng má ？","당신은 학생입니까?","认识你很高兴。你是中国人吗？","rèn shí nǐ hěn gāo xīng 。 nǐ shì zhōng guó rén má ？","만나서 반가워요. 당신은 중국인입니까?","我不是中国人。","wǒ bù shì zhōng guó rén 。","저는 중국인이 아니에요 저는 한국인 입니다.","你是学生吗？","nǐ shì xué shēng má ？","학생이에요?","我是学生","wǒ shì xué shēng","학생입니다."],
	["2","24","你叫什么名字？","nǐ jiào shí me míng zì ？","당신의 이름은 무엇입니까?","你叫什么名字？","nǐ jiào shí me míng zì ？","이름이 뭐에요?","我叫秀炫","wǒ jiào xiù xuàn","저는 수현이에요","您贵姓？","nín guì xìng ？","성이 어떻게 되요?","我姓金","wǒ xìng jīn","저는 김씨에요"],
	["3","26","我很饿。","wǒ hěn è 。","배가 많이 고파요","我们吃什么？我很饿","wǒ mén chī shí me ？ wǒ hěn è","우리 뭐 먹을까요? 배가 많이 고파요","我们吃面包。怎么样？","wǒ mén chī miàn bāo 。 zěn me yàng ？","우리 빵 먹어요. 어때요?","好的。我喜欢面包。","hǎo dí 。 wǒ xǐ huān miàn bāo 。","좋아요. 저 빵 좋아해요","我也是。","wǒ yě shì 。","저도 그래요"],
	["4","28","你看什么？","nǐ kàn shí me ？","너 뭘 보니?","你看什么？","nǐ kàn shí me ？","뭘 보니?","我看汉语书。","wǒ kàn hàn yǔ shū 。","중국어 책 봐.나 중국어 공부하거든","汉语难吗？","hàn yǔ nán má ？","중국어 어려워?","汉语不难。","hàn yǔ bù nán 。","중국어 어렵지 않아."],
	["5","30","很可惜。","hěn kě xī 。","좀 아쉽네","你来不来我家？","nǐ lái bù lái wǒ jiā ？","너 우리집에 올래?","今天很忙。不去。","jīn tiān hěn máng 。 bù qù 。","오늘 좀 바빠. 안갈래","很可惜。","hěn kě xī 。","좀 아쉽네.","不好意思。","bù hǎo yì sī 。","미안해"],
	["6","32","你做什么工作？","nǐ zuò shí me gōng zuò ？","직업이 뭐에요?","你做什么工作？","nǐ zuò shí me gōng zuò ？","당신은 무슨일을 하나요?","我是补习班老师。","wǒ shì bǔ xí bān lǎo shī 。","저는 학원 선생님입니다.","你教什么？","nǐ jiào shí me ？","뭘 가르치세요?","我教汉语。","wǒ jiào hàn yǔ 。","중국어를 가르칩니다."],
	["7","34","我不知道。","wǒ bù zhī dào 。","난 몰라요","爸爸在哪儿？","bà bà zài nǎ ér ？","아빠 어디계셔?","爸爸在洗手间。","bà bà zài xǐ shǒu jiān 。","아빠 화장실에 계세요","我的手机在哪儿？","wǒ dí shǒu jī zài nǎ ér ？","내 핸드폰이 어디에 있지?","我不知道。","wǒ bù zhī dào 。","저는 몰라요."],
	["8","36","你喝咖啡吗？","nǐ hē kā fēi má ？","커피마실래?","你喝咖啡吗？","nǐ hē kā fēi má ？","너 커피 마실래?","不，谢谢。","bù ， xiè xiè 。","아니,고마워","为什么不喝呢？","wéi shí me bù hē ní ？","왜 안마시는데?","我不喜欢咖啡。","wǒ bù xǐ huān kā fēi 。","나 커피 안 좋아해"],
	["9","38","她是谁？","tā shì shuí ？","그녀는 누구야?","她是谁？","tā shì shuí ？","쟤 누구야?","她是我的妹妹。","tā shì wǒ dí mèi mèi 。","내 여동생이야","她很漂亮。她有没有男朋友？","tā hěn piāo liàng 。 tā yǒu méi yǒu nán péng yǒu ？","정말 예쁘다. 남자친구 있어?","她有男朋友。","tā yǒu nán péng yǒu 。","남자친구 있어"],
	["10","40","这是谁啊？","zhè shì shuí ā ？","이게 누구야?","这是谁啊？好久不见","zhè shì shuí ā ？ hǎo jiǔ bù jiàn","이게 누구야? 진짜 오랜만이다.","好久不见 你过得怎么样？","hǎo jiǔ bù jiàn   nǐ guò dé zěn me yàng ？","오랜만이야,잘 지냈니?","过得很好，你呢？","guò dé hěn hǎo ， nǐ ní ？","잘 지냈지, 넌?","我也很好。谢谢你。","wǒ yě hěn hǎo 。 xiè xiè nǐ 。","나도 좋아, 고마워"],
	["11","44","很好吃。","hěn hǎo chī 。","정말 맛있어.","这是什么菜？","zhè shì shí me cài ？","이건 무슨 음식인가요?","这是火爆肉，是中国菜。","zhè shì huǒ bào ròu ， shì zhōng guó cài 。","꿔바로우에요,중국음식이죠","这个很好吃。","zhè gè hěn hǎo chī 。","정말 맛있어요","你多吃一点儿。","nǐ duō chī yī diǎn ér 。","많이 드세요"],
	["12","46","你有时间吗？","nǐ yǒu shí jiān má ？","시간 있니?","你有时间吗？可以帮我吗？","nǐ yǒu shí jiān má ？ kě yǐ bāng wǒ má ？","너 시간 있니? 나 좀 도와줄수 있어?","我没有时间。不好意思。","wǒ méi yǒu shí jiān 。 bù hǎo yì sī 。","나 시간이 없어. 미안해","没关系。你忙吧。","méi guān xì 。 nǐ máng bā 。","괜찮아. 너 바쁜일 봐.","我以后一定帮你。","wǒ yǐ hòu yī dìng bāng nǐ 。","내가 이후엔 반드시 도와줄게"],
	["13","48","我最近学汉语。","wǒ zuì jìn xué hàn yǔ 。","나 요즘 중국어 공부해","你为什么那么忙？","nǐ wéi shí me nà me máng ？","왜 그렇게 바빠?","我最近学汉语。","wǒ zuì jìn xué hàn yǔ 。","나 요즘 중국어 공부해","在哪儿学汉语。","zài nǎ ér xué hàn yǔ 。","어디서 중국어 공부해?","我在补习班学汉语。","wǒ zài bǔ xí bān xué hàn yǔ 。","학원에서 중국어 공부해"],
	["14","50","这是谁的？","zhè shì shuí dí ？","이거 누구거에요?","这个笔是谁的？","zhè gè bǐ shì shuí dí ？","이 펜 누구거에요?","那是我的。","nà shì wǒ dí 。","그거 제 거에요.","我可以用吗？","wǒ kě yǐ yòng má ？","제가 사용해도 될까요?","可以，用完以后放这里吧。","kě yǐ ， yòng wán yǐ hòu fàng zhè lǐ bā 。","돼요. 다 사용한다음에 여기에 좋아 주세요"],
	["15","52","今天看定影怎么样？","jīn tiān kàn dìng yǐng zěn me yàng ？","오늘 영화보는거 어때?","今天看定影怎么样？","jīn tiān kàn dìng yǐng zěn me yàng ？","오늘 영화보는거 어때?","我们看哪个电影？","wǒ mén kàn nǎ gè diàn yǐng ？","어떤 영화를 볼까?","看这个怎么样？","kàn zhè gè zěn me yàng ？","이거 보는거 어떨까?","好的，看这个吧。","hǎo dí ， kàn zhè gè bā 。","좋아 이걸 보자."],
	["16","54","现在几点？","xiàn zài jī diǎn ？","지금 몇 시에요?","现在几点？","xiàn zài jī diǎn ？","지금 몇 시에요?","现在五点。电影几点开始？","xiàn zài wǔ diǎn 。 diàn yǐng jī diǎn kāi shǐ ？","지금 5시에요.영화가 며시에 시작하죠?","五点半开始。我们快点儿走吧。","wǔ diǎn bàn kāi shǐ 。 wǒ mén kuài diǎn ér zǒu bā 。","5시 반에 시작합니다. 우리 빨리 가요.","好的，抓紧时间。","hǎo dí ， zhuā jǐn shí jiān 。","좋아요,시간을 아껴요"],
	["17","56","你什么时候睡觉？","nǐ shí me shí hòu shuì jué ？","너 언제 자?","你什么时候睡觉？","nǐ shí me shí hòu shuì jué ？","너는 언제자?","我晚上12点睡觉","wǒ wǎn shàng 12 diǎn shuì jué","난 밤 12시에 자.","那么什么时候起床呢？","nà me shí me shí hòu qǐ chuáng ní ？","그러면 언제 일어나?","早上7点起床。","zǎo shàng 7 diǎn qǐ chuáng 。","아침 7시에 일어나."],
	["18","58","这儿有烧酒吗？","zhè ér yǒu shāo jiǔ má ？","여기 술 있나요?","这儿有烧酒吗？","zhè ér yǒu shāo jiǔ má ？","여기 소주 있나요?","这儿没有烧酒。","zhè ér méi yǒu shāo jiǔ 。","여기 소주 없어요.","那么有什么酒？","nà me yǒu shí me jiǔ ？","그러면 어떤 술이 있나요?","我们只有啤酒。","wǒ mén zhī yǒu pí jiǔ 。","맥주만 있어요?"],
	["19","60","你明天干什么？","nǐ míng tiān gān shí me ？","너 내일 뭐 할거야?","你明天干什么？","nǐ míng tiān gān shí me ？","너 내일 뭐 할거야?","明天我没有事。","míng tiān wǒ méi yǒu shì 。","내닝ㄹ 난 아무일 없어.","那你可以跟我一起玩儿吗？","nà nǐ kě yǐ gēn wǒ yī qǐ wán ér má ？","그러면 나랑 같이 놀수 있어?","好哇，明天见。","hǎo wā ， míng tiān jiàn 。","좋아. 내일 만나자."],
	["20","62","你喝什么？","nǐ hē shí me ？","뭐 마실래?","我们去咖啡厅吧。","wǒ mén qù kā fēi tīng bā 。","우리 카페에 가자","你喝什么？","nǐ hē shí me ？","뭐 마실래?","我要咖啡，你呢？","wǒ yào kā fēi ， nǐ ní ？","난 커피 넌?","我要喝咖啡。","wǒ yào hē kā fēi 。","나 밀크티 마실래"],
	["21","66","小心一点儿。","xiǎo xīn yī diǎn ér 。","조심해","这杯咖啡很烫，小心一点儿。","zhè bēi kā fēi hěn tàng ， xiǎo xīn yī diǎn ér 。","이커피는 매우 뜨거워 조심해","好的，谢谢你。","hǎo dí ， xiè xiè nǐ 。","알았어, 고마워.","不客气。要加糖吗？","bù kè qì 。 yào jiā táng má ？","그맙긴, 설탕넣어?","不要。我不喜欢甜的。","bù yào 。 wǒ bù xǐ huān tián dí 。","아니 나 단거 안좋아해"],
	["22","68","我能喝两瓶烧酒。","wǒ néng hē liǎng píng shāo jiǔ 。","너 소주 몇병 마셔?","今天我们不醉不归！","jīn tiān wǒ mén bù zuì bù guī ！","오늘 끝까지 마시자!","好！星期六嘛！","hǎo ！ xīng qī liù mB ！","좋아! 토요일이잖아","你能喝几瓶烧酒？","nǐ néng hē jī píng shāo jiǔ ？","너 소주 몇병 마셔?","我能喝两瓶烧酒。","wǒ néng hē liǎng píng shāo jiǔ 。","두병"],
	["23","70","你喜欢中国歌吗？","nǐ xǐ huān zhōng guó gē má ？","중국노래 좋아해?","你喜欢中国歌吗？","nǐ xǐ huān zhōng guó gē má ？","중국노래 좋아해?","喜欢，我常常听中国歌。","xǐ huān ， wǒ cháng cháng tīng zhōng guó gē 。","좋아해, 나 중국노래 자주들어.","你喜欢唱歌吗？","nǐ xǐ huān chàng gē má ？","너 노래부르는거 좋아해?","我不喜欢唱歌。","wǒ bù xǐ huān chàng gē 。","아니 안좋아해."],
	["24","72","你吃饭了吗？","nǐ chī fàn le má ？","너 밥 먹었어?","你吃饭了吗？","nǐ chī fàn le má ？","너 밥 먹었어?","还没吃。","huán méi chī 。","아직 안먹었어. 넌?","我已经吃了。你怎么还没吃呢？","wǒ yǐ jīng chī le 。 nǐ zěn me huán méi chī ní ？","이미 먹었어. 왜 아직 안먹었어?","我现在就去吃，饿死了。","wǒ xiàn zài jiù qù chī ， è sǐ le 。","지금 바로 먹으러 갈거야.배고파 죽겠어"],
	["25","74","我想去中国。","wǒ xiǎng qù zhōng guó 。","중국에 가고 싶어","你去过外国吗？","nǐ qù guò wài guó má ？","너 외국 나가본적 있어?","我没去过外国，不过很想去。","wǒ méi qù guò wài guó ， bù guò hěn xiǎng qù 。","외국에 가본적 없어. 근데 진짜 가고 싶어","你想去哪个国家？","nǐ xiǎng qù nǎ gè guó jiā ？","어느나라에 가고 싶은데?","我想去中国。","wǒ xiǎng qù zhōng guó 。","중국에 가고 싶어."],
	["26","76","我可以用一下你的手机吗？","wǒ kě yǐ yòng yī xià nǐ dí shǒu jī má ？","네 핸드폰 사용해도 될까?","我可以用一下你的手机吗？","wǒ kě yǐ yòng yī xià nǐ dí shǒu jī má ？","네 해드폰 사용해도 될까?","可以，我的手机在桌子上边儿","kě yǐ ， wǒ dí shǒu jī zài zhuō zǐ shàng biān ér","응,내 핸드폰 책상위에 있어","你说哪个桌子呢？","nǐ shuō nǎ gè zhuō zǐ ní ？","어느책상인데?","你后边儿的桌子。","nǐ hòu biān ér dí zhuō zǐ 。","니 뒤에 책상"],
	["27","78","你什么时候回去？","nǐ shí me shí hòu huí qù ？","너 언제 돌아가?","你什么时候回去？","nǐ shí me shí hòu huí qù ？","너 언제 돌아가?","我明年回去。","wǒ míng nián huí qù 。","내년에 돌아가.","还要过一年啊。像爸爸妈妈吗？","huán yào guò yī nián ā 。 xiàng bà bà mā mā má ？","아직 1년더 보내야되네 엄마아빠 보고싶어?","当然想。","dāng rán xiǎng 。","당연히 보고 싶지"],
	["28","80","你去哪儿？","nǐ qù nǎ ér ？","너 어디가?","你去哪儿？","nǐ qù nǎ ér ？","너 어디가?","我去超市买东西。","wǒ qù chāo shì mǎi dōng xī 。","물건 사러 마트가.","你可以帮我买一个东西吗？","nǐ kě yǐ bāng wǒ mǎi yī gè dōng xī má ？","물건 하나만 사다줄수 있어?","可以，要买什么？","kě yǐ ， yào mǎi shí me ？","그래,뭘 사려고 하는데?"],
	["29","82","当然知道。","dāng rán zhī dào 。","당연히 알지","他怎么不回来？","tā zěn me bù huí lái ？","걔가 왜 안 돌아오지?","你给他打电话吧。","nǐ gěi tā dǎ diàn huà bā 。","너가 걔한테 전화해봐","你知道他的电话号码吗？","nǐ zhī dào tā dí diàn huà hào mǎ má ？","전화번호 알아?","当然知道。","dāng rán zhī dào 。","당연히 알지"],
	["30","84","你们要什么？","nǐ mén yào shí me ？","무엇을 원하세요?","你们要什么？","nǐ mén yào shí me ？","뭘 원하세요?","给我们两瓶啤酒和一直炸鸡。","gěi wǒ mén liǎng píng pí jiǔ hé yī zhí zhà jī 。","맥주두병 치킨한마리 주세요","好的，还要什么吗？","hǎo dí ， huán yào shí me má ？","알겠습니다. 더 필요하신것 있으세요?","不要了？","bù yào le ？","괜찮아요."],
	["31","88","你几月几号去中国？","nǐ jī yuè jī hào qù zhōng guó ？","너 몇월 몇일에 중국가니?","你几月几号去中国？","nǐ jī yuè jī hào qù zhōng guó ？","너 몇월 몇일에 중국가니?","五月十号去中国。","wǔ yuè shí hào qù zhōng guó 。","5월 10일에 중국가","那你什么时候回来？","nà nǐ shí me shí hòu huí lái ？","그러면 언제 돌아와?","明年会回来的。","míng nián huì huí lái dí 。","내년에 돌아올 거야"],
	["32","90","我们在哪儿学习？","wǒ mén zài nǎ ér xué xí ？","우리 어디서 공부할까?","明天你要不要跟我一起学习？","míng tiān nǐ yào bù yào gēn wǒ yī qǐ xué xí ？","내일 나랑 같이 공부할래?","好，我也要准备考试。","hǎo ， wǒ yě yào zhǔn bèi kǎo shì 。","좋아. 나도 시험 준비해야해.","那我们在哪儿学习？","nà wǒ mén zài nǎ ér xué xí ？","그러면 우리 어디서 공부하지?","我们去图书馆吧。那儿很安静。","wǒ mén qù tú shū guǎn bā 。 nà ér hěn ān jìng 。","도서관에 가자 아주 조용해"],
	["33","92","别担心。","bié dān xīn 。","걱정마","你在哪儿？","nǐ zài nǎ ér ？","너 어디야?","我在公共汽车上。","wǒ zài gōng gòng qì chē shàng 。","나 버스안에 있어","你不会迟到吧？","nǐ bù huì chí dào bā ？","안늦지?","别担心，我不会迟到的。","bié dān xīn ， wǒ bù huì chí dào dí 。","걱정마 나 안늦을거야"],
	["34","94","图书馆怎么走？","tú shū guǎn zěn me zǒu ？","도서관에 어떻게 가요?","请问，图书馆怎么走？","qǐng wèn ， tú shū guǎn zěn me zǒu ？","실례합니다. 도서관에 어떻게 가요?","顺着这条路走就会到。","shùn zhuó zhè tiáo lù zǒu jiù huì dào 。","이길을 따라서 걸어가면 바로 도착할 겁니다.","要走多长时间？","yào zǒu duō cháng shí jiān ？","얼마나 걸어가야 하나요?","走10分钟就到。","zǒu 10 fēn zhōng jiù dào 。","10분만 걸어가면 도착합니다."],
	["35","96","我跟她分手了。","wǒ gēn tā fēn shǒu le 。","그녀와 헤어졌어","你的脸色怎么这么难看啊？","nǐ dí liǎn sè zěn me zhè me nán kàn ā ？","너 안색이 왜이리 안좋아?","我跟她分手了。","wǒ gēn tā fēn shǒu le 。","나 그녀와 헤어졌어.","怎么了？上个星期还好好儿的嘛。","zěn me le ？ shàng gè xīng qī huán hǎo hǎo ér dí mB 。","무슨일이야? 저번주까지는 좋았잖아.","你别问了，我想一个人静静。","nǐ bié wèn le ， wǒ xiǎng yī gè rén jìng jìng 。","그만 물어 나 혼자있고 싶어"],
	["36","98","你想吃什么就吃什么。","nǐ xiǎng chī shí me jiù chī shí me 。","너 먹고 싶은거 먹어.","你想吃什么？","nǐ xiǎng chī shí me ？","뭐 먹고 싶어?","你想吃什么就吃什么。","nǐ xiǎng chī shí me jiù chī shí me 。","너 먹고싶은거 그거 먹어","我不太熟悉中国菜。","wǒ bù tài shú xī zhōng guó cài 。","나 중국음식 잘 몰라.","那我来点吧。","nà wǒ lái diǎn bā 。","그러면 내가 주문할게"],
	["37","100","真不像话。","zhēn bù xiàng huà 。","정말 꼴불견이야","他那个人真是的。","tā nà gè rén zhēn shì dí 。","걔 정말 너무해","怎么了？","zěn me le ？","무슨 일이야?","不说一声就走了，真不像话","bù shuō yī shēng jiù zǒu le ， zhēn bù xiàng huà","말 한마디 없이 그냥 갔어. 꼴불견이야!","别生气了，他这个人总是这样。","bié shēng qì le ， tā zhè gè rén zǒng shì zhè yàng 。","화내지마 걔 항상 그래"],
	["38","102","他住哪儿？","tā zhù nǎ ér ？","그는 어디 살아?","你认识那个人吗？","nǐ rèn shí nà gè rén má ？","너 저사람 알아?","那个人？他是我的朋友。","nà gè rén ？ tā shì wǒ dí péng yǒu 。","저 사람? 쟤 내 친구야","是吗？他住哪儿？","shì má ？ tā zhù nǎ ér ？","그래? 쟤 어디 살아?","他住我家旁边儿。","tā zhù wǒ jiā páng biān ér 。","우리 집 옆에 살아."],
	["39","104","我感冒了。","wǒ gǎn mào le 。","감기에 걸렸어.","昨天的会议，你参加了吗？","zuó tiān dí huì yì ， nǐ cān jiā le má ？","어제 회의에 너 참가했어?","我没参加。我感冒了。","wǒ méi cān jiā 。 wǒ gǎn mào le 。","참가 못했어. 감기에 걸렸거든","感冒了？严重吗？吃药了吗？","gǎn mào le ？ yán zhòng má ？ chī yào le má ？","감기 걸렸어? 심각해? 약은 먹었어?","吃了，不太严重。","chī le ， bù tài yán zhòng 。","먹었어. 심하지는 않아"],
	["40","106","这个多少钱？","zhè gè duō shǎo qián ？","이거 얼마에요?","请问，这件衣服多少钱？","qǐng wèn ， zhè jiàn yī fú duō shǎo qián ？","실례합니다. 이옷 얼마에요?","这个六百块。","zhè gè liù bǎi kuài 。","600위안입니다.","这么贵？便宜一点儿好吗？","zhè me guì ？ biàn yí yī diǎn ér hǎo má ？","그렇게 비싸요? 싸게 해 줄수 있나요?","不行，这是特价。","bù xíng ， zhè shì tè jià 。","안됩니다. 특가에요"],
	["41","110","你会说汉语吗？","nǐ huì shuō hàn yǔ má ？","너 중국어 할줄 아니?","这次放假你要干什么？","zhè cì fàng jiǎ nǐ yào gān shí me ？","이번 방학에 뭐할거야?","我要去中国。","wǒ yào qù zhōng guó 。","중국에 갈거야","你会说汉语吗？","nǐ huì shuō hàn yǔ má ？","너 중국어 할줄 알아?","我会一点儿。","wǒ huì yī diǎn ér 。","조금 해"],
	["42","112","你在干什么？","nǐ zài gān shí me ？","너 뭐하고 있어?","你在干什么？","nǐ zài gān shí me ？","너 뭐하고 있어?","我在做菜呢。我做给你吃。","wǒ zài zuò cài ní 。 wǒ zuò gěi nǐ chī 。","요리하고 있어. 너 만들어 주려고","做什么菜呢？","zuò shí me cài ní ？","어떤 요리 하는데?","我做拌饭，是韩国地道的菜。","wǒ zuò bàn fàn ， shì hán guó dì dào dí cài 。","비빔밥해. 한국전통요리야"],
	["43","114","她是我的姐姐。","tā shì wǒ dí jiě jiě 。","그녀는 우리 언니야?","她是不是你的妹妹？","tā shì bù shì nǐ dí mèi mèi ？","쟤, 네 여동생 아니야?","不是，她是我的姐姐。","bù shì ， tā shì wǒ dí jiě jiě 。","아니, 우리 언니야.","他今年多大？","tā jīn nián duō dà ？","올해 몇 살인데?","她23岁，是大学生。","tā 23 suì ， shì dà xué shēng 。","23살이야 대학생이야."],
	["44","116","怎么去？","zěn me qù ？","어떻게 가?","这个周末你要干什么？","zhè gè zhōu mò nǐ yào gān shí me ？","이번 주말에 뭐 할거야?","这个周末我跟朋友去釜山","zhè gè zhōu mò wǒ gēn péng yǒu qù fǔ shān","이번 주말에 친구랑 부산에 가.","你们怎么去？","nǐ mén zěn me qù ？","어떻게 가는데?","我们坐火车去。","wǒ mén zuò huǒ chē qù 。","기차 타고 가."],
	["45","118","你喜欢中国菜吗？","nǐ xǐ huān zhōng guó cài má ？","너 중국 음식 좋아해?","你喜欢中国菜吗？","nǐ xǐ huān zhōng guó cài má ？","너 중국 음식 좋아해?","以前不习惯，可是现在我喜欢吃中国菜了。","yǐ qián bù xí guàn ， kě shì xiàn zài wǒ xǐ huān chī zhōng guó cài le 。","이전에는 적응이 안됐는데, 지금은 중국 음식 먹는 거 좋아해","你今晚我们去吃中国菜怎么样？","nǐ jīn wǎn wǒ mén qù chī zhōng guó cài zěn me yàng ？","그러면 오늘 저녁에 우리 중국 음식 먹으러 가는거 어떄?","好哇，去哪个餐厅呢？","hǎo wā ， qù nǎ gè cān tīng ní ？","좋아, 어느 식당에 가지?"],
	["46","120","我是来学汉语的。","wǒ shì lái xué hàn yǔ dí 。","중국어 공부하러 왔어","你是从哪儿来的？","nǐ shì cóng nǎ ér lái dí ？","넌 어디서 왔어?","我是从韩国来的。","wǒ shì cóng hán guó lái dí 。","한국에서 왔어?","你是为什么来中国的？","nǐ shì wéi shí me lái zhōng guó dí ？","중국에 왜왔어?","我是来学汉语的。","wǒ shì lái xué hàn yǔ dí 。","중국어 공부하러 왔어."],
	["47","122","我给你介绍一下我的朋友。","wǒ gěi nǐ jiè shào yī xià wǒ dí péng yǒu 。","내 친구를 소개 할게","给你介绍一下我的朋友。","gěi nǐ jiè shào yī xià wǒ dí péng yǒu 。","너에게 내 친구를 소개할게","你们两个人是怎么认识的？","nǐ mén liǎng gè rén shì zěn me rèn shí dí ？","너희 둘은 어떻게 알게 된 사이야?","我们是上大学的时候认识的。","wǒ mén shì shàng dà xué dí shí hòu rèn shí dí 。","우린 대학교때 알던 사이야","那已经认识了十几年了吧！","nà yǐ jīng rèn shí le shí jī nián le bā ！","그러면 이미 10여년을 알고 지냈구나"],
	["48","124","我不是故意的。","wǒ bù shì gù yì dí 。","고의가 아니었어","你怎么不接我的电话呀？","nǐ zěn me bù jiē wǒ dí diàn huà yā ？","너 왜 내 전화를 안받아!","我的手机没电了。我不是故意的。","wǒ dí shǒu jī méi diàn le 。 wǒ bù shì gù yì dí 。","내 핸드폰 배터리가 다 됐어. 고의가 아니었어","我有充电器。用我的充电吧。","wǒ yǒu chōng diàn qì 。 yòng wǒ dí chōng diàn bā 。","나 충전기 있어. 내 거로 충전해","好吧，谢谢你。","hǎo bā ， xiè xiè nǐ 。","좋아. 고마워"],
	["49","126","怎么了？","zěn me le ？","무슨 일이야?","你的眼睛怎么红了？","nǐ dí yǎn jīng zěn me hóng le ？","너 눈이 왜 빨개?","昨晚没睡好。","zuó wǎn méi shuì hǎo 。","어젯밤에 잠을 잘 못잤어","怎么了？ 有什么心事吗？","zěn me le ？   yǒu shí me xīn shì má ？","무슨일이야 고민있어?","我昨天跟男朋友吵了一架，就睡不着觉了","wǒ zuó tiān gēn nán péng yǒu chǎo le yī jià ， jiù shuì bù zhuó jué le","나 어제 남친이랑 싸웠어. 그래서 잠을 들수가 없더라고"],
	["50","128","他太过分了。","tā tài guò fēn le 。","걔 정말 너무한다.","他怎么今天又迟到呢？","tā zěn me jīn tiān yòu chí dào ní ？","걔는 왜 또 늦니?","他太过分了。你在给他打个电话吧。","tā tài guò fēn le 。 nǐ zài gěi tā dǎ gè diàn huà bā 。","정말 너무한다. 계한테 전화해바","别管他。我们先去吧。","bié guǎn tā 。 wǒ mén xiān qù bā 。","걔 신경쓰지마 우리 먼저 가자","好吧。我也不理他了。","hǎo bā 。 wǒ yě bù lǐ tā le 。","좋아. 나도 신경 안쓸래"],
	["51","132","我已经做好了。","wǒ yǐ jīng zuò hǎo le 。","이미 다 했어요","又开始玩儿游戏？作业，你做完了吗？","yòu kāi shǐ wán ér yóu xì ？ zuò yè ， nǐ zuò wán le má ？","또 게임하니? 숙제, 너 다 했어?","我已经做好了。","wǒ yǐ jīng zuò hǎo le 。","이미 다 했어요","那你只能玩儿一个小时。","nà nǐ zhī néng wán ér yī gè xiǎo shí 。","그러면 딱 1시간만 해라","哎呦，妈，可不可以玩儿两个小时？","āi yōu ， mā ， kě bù kě yǐ wán ér liǎng gè xiǎo shí ？","에이, 엄마 2시간 하면 안되요?"],
	["52","134","你会骑自行车吗？","nǐ huì qí zì xíng chē má ？","자전거 탈 줄 알아?","你会骑自行车吗？","nǐ huì qí zì xíng chē má ？","자전거 탈 줄 알아?","会啊，我是跟爸爸学的","huì ā ， wǒ shì gēn bà bà xué dí","탈 줄 알아. 아빠한테 배웠어","那么今天一起去骑自行车吧。","nà me jīn tiān yī qǐ qù qí zì xíng chē bā 。","그러면 오늘 같이 자전거 타러 가자","可是我现在不能骑自行车。我的手受伤了。","kě shì wǒ xiàn zài bù néng qí zì xíng chē 。 wǒ dí shǒu shòu shāng le 。","근데 난 지금 자전거를 탈 수 없어. 손을 다쳤거든"],
	["53","136","我哪儿有钱啊！","wǒ nǎ ér yǒu qián ā ！","내가 돈이 어디있어?","你能借我点儿钱吗？","nǐ néng jiè wǒ diǎn ér qián má ？","너 돈 좀 빌려줄수 있어?","我哪儿有钱啊！怎么了？","wǒ nǎ ér yǒu qián ā ！ zěn me le ？","내가 돈이 어디있니! 무슨 일이야?","这个月手头有点紧。","zhè gè yuè shǒu tóu yǒu diǎn jǐn 。","이번 달에 주머니 사정이 좀 안 좋아","哎呦，需要多少？我也没有很多。","āi yōu ， xū yào duō shǎo ？ wǒ yě méi yǒu hěn duō 。","얼마가 필요한데? 나도 많이는 없어."],
	["54","138","你要不要相亲啊？","nǐ yào bù yào xiāng qīn ā ？","너 소개팅할래?","你要不要相亲啊？我给你介绍一下好男人。","nǐ yào bù yào xiāng qīn ā ？ wǒ gěi nǐ jiè shào yī xià hǎo nán rén 。","너 소개팅할래? 내가 좋은 남자 한명 소개시켜 줄게","他长得怎么样？帅吗？","tā cháng dé zěn me yàng ？ shuài má ？","어떻게 생겼는데?잘생겻어?","帅，非常帅！","shuài ， fēi cháng shuài ！","잘생겼어. 진짜 잘생겼어!","那我见见吧。","nà wǒ jiàn jiàn bā 。","그러면 한번 만나 볼게"],
	["55","140","你喜欢踢足球吗？","nǐ xǐ huān tī zú qiú má ？","축구하는거 좋아해?","你喜欢踢足球吗？","nǐ xǐ huān tī zú qiú má ？","너 축구하는거 좋아해?","很喜欢，不过踢得不太好。","hěn xǐ huān ， bù guò tī dé bù tài hǎo 。","정말 좋아해.근데 별로 잘하진 않아","那你擅长什么运动呢","nà nǐ shàn cháng shí me yùn dòng ní","그러면 넌 어떤 운동을 잘해?","我打篮球打得更好。","wǒ dǎ lán qiú dǎ dé gēng hǎo 。","난 농구를 더 잘해"],
	["56","142","你辛苦了。","nǐ xīn kǔ le 。","수고했어~","太累了，我上课上了6个小时。","tài léi le ， wǒ shàng kè shàng le 6 gè xiǎo shí 。","진짜 피곤해 나 수업을 6시간이나 들었어","那么长时间啊，怎么了？","nà me cháng shí jiān ā ， zěn me le ？","그렇게나 길게,무슨 일이야?","上个星期教授有事儿没来。今天补课了","shàng gè xīng qī jiào shòu yǒu shì ér méi lái 。 jīn tiān bǔ kè le","지난주에 교수님이 일이 있으셔서 못 오셨거든,오늘 보강했어","你辛苦了。好好儿休息一下。","nǐ xīn kǔ le 。 hǎo hǎo ér xiū xī yī xià 。","고생했네 푹 쉬어"],
	["57","144","明天有事星期一了","míng tiān yǒu shì xīng qī yī le","내일 또 월요일이네","明天又是星期一了。","míng tiān yòu shì xīng qī yī le 。","내일 또 월요일이네","是啊，如果每天都是周末的话，多好啊。","shì ā ， rú guǒ měi tiān dū shì zhōu mò dí huà ， duō hǎo ā 。","그래 만약에 매일이 주말이면 얼마나 좋을까","哈哈，想得美。以后再来我家玩儿吧。","hā hā ， xiǎng dé měi 。 yǐ hòu zài lái wǒ jiā wán ér bā 。","하하 생각도 야무지네 나중에 우리집에 와서 또 놀아","好吧。再见。","hǎo bā 。 zài jiàn 。","알았어 또봐"],
	["58","146","听得懂。","tīng dé dǒng 。","알아들어요","我说的话你听的懂吗？","wǒ shuō dí huà nǐ tīng dí dǒng má ？","내가하는말 알아듣겠니?","听得懂，我汉语已经学了一年了。","tīng dé dǒng ， wǒ hàn yǔ yǐ jīng xué le yī nián le 。","알아들어요, 저 중국어 이미 1년쨰 공부하고 있는걸요","哇，你真了不起。你的汉语进步很大。","wā ， nǐ zhēn le bù qǐ 。 nǐ dí hàn yǔ jìn bù hěn dà 。","와 너 정말 대단하다. 중국어가 많이 늘었어","过奖了，还差得远呢。","guò jiǎng le ， huán chà dé yuǎn ní 。","과찬이세요 아직 한참 멀었어요"],
	["59","148","真厉害！","zhēn lì hài ！","정말 대단해","你游泳有的真厉害！","nǐ yóu yǒng yǒu dí zhēn lì hài ！","너 수영 정말 잘한다.","我15岁就开始学游泳。现在已经十年了。","wǒ 15 suì jiù kāi shǐ xué yóu yǒng 。 xiàn zài yǐ jīng shí nián le 。","전 15살때부터 수영을 배웠어요 지금 벌써 10년 째에요","你可以当游泳老师了。","nǐ kě yǐ dāng yóu yǒng lǎo shī le 。","넌 수영 선생님을 해도 되겠다.","游泳只是我的爱好。","yóu yǒng zhī shì wǒ dí ài hǎo 。","수영은 그저 제 취미에요"],
	["60","150","你别生气了。","nǐ bié shēng qì le 。","화내지마","现在都几点了？你怎么现在才来？","xiàn zài dū jī diǎn le ？ nǐ zěn me xiàn zài cái lái ？","지금 벌써 몇시야? 넌 어째서 이제야 오는거야?","对不起。因为路上堵车，所以迟到了。","duì bù qǐ 。 yīn wéi lù shàng dǔ chē ， suǒ yǐ chí dào le 。","미안해 차가 막혀서 그래서 늦었어","那你应该早点出发呀！","nà nǐ yīng gāi zǎo diǎn chū fā yā ！","그러면 일찍 출발했었어야지","你别生气了，我已经向你道歉了吗。","nǐ bié shēng qì le ， wǒ yǐ jīng xiàng nǐ dào qiàn le má 。","화내지마 내가 이미 사과했잖아"],
	["61","154","好极了。","hǎo jí le 。","정말 좋겠다.","我从七月到十月去欧洲旅行。","wǒ cóng qī yuè dào shí yuè qù ōu zhōu l锟斤拷 xíng 。","저 7월부터 10월까지 유럽 여행가요","好极了！你要去那个国家？","hǎo jí le ！ nǐ yào qù nà gè guó jiā ？","정말 좋겠다.어느 나라에 가?","要去的国家太多了，说不出来。","yào qù dí guó jiā tài duō le ， shuō bù chū lái 。","가려는 나라가 너무 많아서 말로 다 못해요","多怕照片回来给我看。","duō pà zhào piàn huí lái gěi wǒ kàn 。","사진 많이 찍고 돌아와서 나에게 보여줘"],
	["62","156","考试考得怎么样？","kǎo shì kǎo dé zěn me yàng ？","시험친것 어땠어?","你这次考试考得怎么样？","nǐ zhè cì kǎo shì kǎo dé zěn me yàng ？","넌 이번 시험 어땠어?","别问了，我考砸了。","bié wèn le ， wǒ kǎo zá le 。","묻지마, 망쳤어","哎呦，别太失望了。还有下次呢。","āi yōu ， bié tài shī wàng le 。 huán yǒu xià cì ní 。","어이쿠, 너무 실망하지 마 다음번이 있잖아","好吧，谢谢你。","hǎo bā ， xiè xiè nǐ 。","응 고마워"],
	["63","158","没关系","méi guān xì","괜찮아","超市怎么走？您能告诉我吗？","chāo shì zěn me zǒu ？ nín néng gào sù wǒ má ？","마트에 어떻게 가? 내게 알려줄 수 있어?","离这儿很远。你要30走分钟。","lí zhè ér hěn yuǎn 。 nǐ yào 30 zǒu fēn zhōng 。","여기서 좀 멀어.30분은 걸어가야해","没关系，你告诉我怎么走就行。","méi guān xì ， nǐ gào sù wǒ zěn me zǒu jiù xíng 。","괜찮아, 어떻게 가는지 알려만 주면 돼","往这个方向走，到了邮局往右拐，然后往前走。","wǎng zhè gè fāng xiàng zǒu ， dào le yóu jú wǎng yòu guǎi ， rán hòu wǎng qián zǒu 。","이 방향으로 걸어가다가 우체국에서 오른쪽으로 꺽어 그리고 앞으로 쭉가"],
	["64","160","你每星期去几次？","nǐ měi xīng qī qù jī cì ？","일주일에 몇 번 가?","你最近在干什么？","nǐ zuì jìn zài gān shí me ？","너 요즘 뭐해?","我最近去健身房锻炼身体。","wǒ zuì jìn qù jiàn shēn fáng duàn liàn shēn tǐ 。","난 요즘 헬스장에 가서 몸 만들어","你每星期去几次？","nǐ měi xīng qī qù jī cì ？","매주 몇 번 가는데","我没星期去三次。","wǒ méi xīng qī qù sān cì 。","매주 세번가"],
	["65","162","我头疼得很厉害。","wǒ tóu téng dé hěn lì hài 。","머리가 너무 아파","我头疼得很厉害。","wǒ tóu téng dé hěn lì hài 。","머리가 너무 아파","吃药了吗？跟我一起去医院吧。","chī yào le má ？ gēn wǒ yī qǐ qù yī yuàn bā 。","약 먹었어? 나랑 같이 병원 가자","不想去，我想在家休息。","bù xiǎng qù ， wǒ xiǎng zài jiā xiū xī 。","가고 싶지 않아. 그냥 집에서 쉬고 싶어","忍得住吗？我很担心。","rěn dé zhù má ？ wǒ hěn dān xīn 。","참을 수 있겠어? 걱정된다."],
	["66","164","我还给你。","wǒ huán gěi nǐ 。","너한테 돌려줄게","我还给你钱吧。","wǒ huán gěi nǐ qián bā 。","너한테 돈 돌려줄게","什么钱？","shí me qián ？","무슨 돈?","这是上个月你借给我的钱。","zhè shì shàng gè yuè nǐ jiè gěi wǒ dí qián 。","이건 지난달에 네가 나한테 빌려준 돈이야","哦，我忘了。你真守信。","ó ， wǒ wàng le 。 nǐ zhēn shǒu xìn 。","아 나 잊고 있었어 너 정말 신용있다."],
	["67","166","你真了不起！","nǐ zhēn le bù qǐ ！","너 정말 대단하다","这是我做的菜，你尝尝吧。","zhè shì wǒ zuò dí cài ， nǐ cháng cháng bā 。","이거 내가 만든 요리야 먹어봐","非常好吃。你是跟谁学的？","fēi cháng hǎo chī 。 nǐ shì gēn shuí xué dí ？","진짜 맛있다. 너 누구한테 배운거야?","我不是跟谁学的。我自己琢磨做的。","wǒ bù shì gēn shuí xué dí 。 wǒ zì jǐ zhuó mó zuò dí 。","누구한테 배운거 아니야 나혼자 궁리해서 만들었어","你真了不起！","nǐ zhēn le bù qǐ ！","너 정말 대단하다."],
	["68","168","这真是一个好主意！","zhè zhēn shì yī gè hǎo zhǔ yì ！","이거 정말 좋은 생각이다","这次放假你打算干什么？","zhè cì fàng jiǎ nǐ dǎ suàn gān shí me ？","이번 방학에 너 뭐 할 계획이야?","我还没有什么打算。","wǒ huán méi yǒu shí me dǎ suàn 。","나 아직 아무 계획 없어","要不要跟我一起去中国旅游?","yào bù yào gēn wǒ yī qǐ qù zhōng guó l锟斤拷 yóu ?","나랑 같이 중국에 가서 여행가지 않을래?","这真是一个好主意！","zhè zhēn shì yī gè hǎo zhǔ yì ！","정말 좋은 생각이다."],
	["69","170","改天再说吧。","gǎi tiān zài shuō bā 。","다른 날 가자","你知道今天我们要去看电影吧？","nǐ zhī dào jīn tiān wǒ mén yào qù kàn diàn yǐng bā ？","너 오늘 우리 영화 보러 가기로 한거 알지?","改天再去吧。我今天有点儿累。","gǎi tiān zài qù bā 。 wǒ jīn tiān yǒu diǎn ér léi 。","다른날 다시가자. 나 오늘 좀 피곤해","你怎么又说话不算数呢？","nǐ zěn me yòu shuō huà bù suàn shù ní ？","넌 왜 또 약속을 안 지켜?","不好意思，今天身体真的不舒服。","bù hǎo yì sī ， jīn tiān shēn tǐ zhēn dí bù shū fú 。","미안해. 오늘은 몸이 정말 안 좋아"],
	["70","172","吓死我了。","xià sǐ wǒ le 。","놀라 죽을뻔했네","吓死我了！你怎么不说一声呢？","xià sǐ wǒ le ！ nǐ zěn me bù shuō yī shēng ní ？","아이구 놀래라! 넌 어째 인기척도 안하니?","哎呦，不好意思。","āi yōu ， bù hǎo yì sī 。","어머 미안해","你从什么时候在这儿的？","nǐ cóng shí me shí hòu zài zhè ér dí ？","너 언제부터 여기 있었던 거야?","杭来。我不是故意的。","háng lái 。 wǒ bù shì gù yì dí 。","막 왔어. 일부러 그런거 아니야"],
	["71","176","你看错人了。","nǐ kàn cuò rén le 。","사람 잘못 보셨어요","你好，我们好像以前见过面。","nǐ hǎo ， wǒ mén hǎo xiàng yǐ qián jiàn guò miàn 。","안녕하세요 우리 이전에 만난적 이 있는것 같은데요","不好意思。我记性不好。","bù hǎo yì sī 。 wǒ jì xìng bù hǎo 。","미안합니다. 제가 기억력이 안 좋아서요","我想起来了。你是不是高丽初中毕业的？","wǒ xiǎng qǐ lái le 。 nǐ shì bù shì gāo lì chū zhōng bì yè dí ？","생각났어요. 고려중학교 졸업하신것 맞죠?","不对，你看错人了。","bù duì ， nǐ kàn cuò rén le 。","아니요, 사람 잘못 보셨어요"],
	["72","178","我得减肥了。","wǒ dé jiǎn féi le 。","다이어트 해야겠어","你发福了。","nǐ fā fú le 。","너 살이 올랐다.","是啊，我得减肥了。","shì ā ， wǒ dé jiǎn féi le 。","그래 나 다이어트 해야겠어","你应该少吃点儿。","nǐ yīng gāi shǎo chī diǎn ér 。","너는 좀 적게 먹어야해","我吃东西吃的不多！","wǒ chī dōng xī chī dí bù duō ！","나 많이 먹지 않거든"],
	["73","180","连孩子都会。","lián hái zǐ dū huì 。","어린애들도 다 해","你会说英语吗？","nǐ huì shuō yīng yǔ má ？","너 영어회화 할줄 알아?","我不会说英语，连“你好”也不会说。","wǒ bù huì shuō yīng yǔ ， lián “ nǐ hǎo ” yě bù huì shuō 。","난 영어 할줄 몰라 '안녕하세요!'조차도 몰라","这个连孩子都会。是“Hello”嘛！","zhè gè lián hái zǐ dū huì 。 shì “ Hello ” mB ！","이건 어린애들도 다 해 'Hello!' 잖아","哦，听起来我也会啊。","ó ， tīng qǐ lái wǒ yě huì ā 。","아 듣고보니 나도 할줄 아네"],
	["74","182","不用了。","bù yòng le 。","괜찮습니다.","我不吃了，吃得很饱。","wǒ bù chī le ， chī dé hěn bǎo 。","전 그만 먹을게요 정말 많이 먹었어요","够了吗？要不要吃点儿甜点？","gòu le má ？ yào bù yào chī diǎn ér tián diǎn ？","충분해요? 디저트 좀 드시겠어요?","不用了，谢谢。我该走了。","bù yòng le ， xiè xiè 。 wǒ gāi zǒu le 。","괜찮아요. 감사해요. 전 이만 가봐야겠어요","好的，下次再来我家玩儿吧。","hǎo dí ， xià cì zài lái wǒ jiā wán ér bā 。","알겠어요 다음에 저희 집에 또 놀러 오세요"],
	["75","184","就要下雨了。","jiù yào xià yǔ le 。","비가 오려고 해","外面天气怎么样？","wài miàn tiān qì zěn me yàng ？","바깥 날씨가 어때?","就要下雨了。你别去踢足球了。","jiù yào xià yǔ le 。 nǐ bié qù tī zú qiú le 。","비가 오려고 해 너 축구하러 가지마","怎么也得去，今天的比赛很重要。","zěn me yě dé qù ， jīn tiān dí bǐ sài hěn zhòng yào 。","어쨌든 가야해 오늘 경기 진짜 중요하거든","那你多穿点儿衣服。别感冒了。","nà nǐ duō chuān diǎn ér yī fú 。 bié gǎn mào le 。","그러면 옷을 많이 입고가 감기 걸리지 않도록 해"],
	["76","186","说不出口。","shuō bù chū kǒu 。","말을 못 꺼내겠어","我学了十年英语了。","wǒ xué le shí nián yīng yǔ le 。","난 10년째 영어 공부를 하고 있어","那你的口语应该很流利吧。","nà nǐ dí kǒu yǔ yīng gāi hěn liú lì bā 。","그러면 회화가 매우 유창하겠구나","其实在美国人面前说不出口。","qí shí zài měi guó rén miàn qián shuō bù chū kǒu 。","사실은 미국인 앞에서는 말을 못 꺼내겠어","那你的学习方法应该有问题。","nà nǐ dí xué xí fāng fǎ yīng gāi yǒu wèn tí 。","그러면 네 공부 방법이 문제가 있는 것 같은데"],
	["77","188","已经说好了嘛。","yǐ jīng shuō hǎo le mB 。","이미 얘기 끝난거잖아","如果明天下雪的话，我们就不去旅行了。","rú guǒ míng tiān xià xuě dí huà ， wǒ mén jiù bù qù l锟斤拷 xíng le 。","만약에 내일 눈이 오면 우리 여행가지 말자","为什么，已经说好了嘛！","wéi shí me ， yǐ jīng shuō hǎo le mB ！","왜 이미 끝난이야기잖아","下雪的话，开车很危险。","xià xuě dí huà ， kāi chē hěn wēi xiǎn 。","눈이 오면 운전하는게 정말 위험해 ","那小心点儿不就得了嘛？","nà xiǎo xīn diǎn ér bù jiù dé le mB ？","그러면 조심하면 되지 않겠어?"],
	["78","190","我们走上去吧。","wǒ mén zǒu shàng qù bā 。","걸어 올라가자","我们走上去吧。","wǒ mén zǒu shàng qù bā 。","우리 걸어 올라가자","为什么不坐电梯呢？","wéi shí me bù zuò diàn tī ní ？","왜 엘리베이터는 안 타는거야?","为了我们的健康。","wéi le wǒ mén dí jiàn kāng 。","우리 건강을 위해서","那你一个人走上去。我坐电梯。","nà nǐ yī gè rén zǒu shàng qù 。 wǒ zuò diàn tī 。","그러면 너 혼자서 걸어 올라가. 난 엘리베이터 탈게"],
	["79","192","发生了什么事儿？","fā shēng le shí me shì ér ？","무슨 일이 일어난거야?","那里发生了什么事儿？那么吵。","nà lǐ fā shēng le shí me shì ér ？ nà me chǎo 。","저기 무슨 일이 일어난거야? 저렇게 시끄럽지?","我们爬过去看看吧。","wǒ mén pá guò qù kàn kàn bā 。","우리 빨리 가서 보자","不去了，我们不要管闲事儿。","bù qù le ， wǒ mén bù yào guǎn xián shì ér 。","안 갈래. 우리 남의일에 간섭하지 말자","还得过去看看吧。说不定我们能帮上忙呢。","huán dé guò qù kàn kàn bā 。 shuō bù dìng wǒ mén néng bāng shàng máng ní 。","그래도 가서 좀 보자. 아마도 우리가 도울게 있을거야"],
	["80","194","该你请客了。","gāi nǐ qǐng kè le 。","네가 한턱 낼 차례야","这次该你请客了。","zhè cì gāi nǐ qǐng kè le 。","이번엔 네가 한턱 낼 차례야","哎呦，我今天没钱。","āi yōu ， wǒ jīn tiān méi qián 。","어머, 난 돈이 없어","你怎么每天这样啊。太过分了。","nǐ zěn me měi tiān zhè yàng ā 。 tài guò fēn le 。","넌 어째서 매일 이러니?진짜 너무한다","我怎么了。没钱怎么办啊？","wǒ zěn me le 。 méi qián zěn me bàn ā ？","내가 어쨌다고 그래. 돈이 없는걸 어떡하냐"],
	["81","198","记住了","jì zhù le","기억해","你记住了！千万别忘了。","nǐ jì zhù le ！ qiān wàn bié wàng le 。","너 기억해! 절대 잊으면 안돼","我记住了。这么重要的事儿怎么能忘记呢。","wǒ jì zhù le 。 zhè me zhòng yào dí shì ér zěn me néng wàng jì ní 。","기억했어. 이렇게 중요한걸 어떻게 잊을수 있겠어?","你总是说的跟做的不一样","nǐ zǒng shì shuō dí gēn zuò dí bù yī yàng","넌 항상 말과 행동이 달라","这次我不会的。","zhè cì wǒ bù huì dí 。","이번엔 안그럴거야?"],
	["82","200","不行。","bù xíng 。","안돼","我有话跟你说。","wǒ yǒu huà gēn nǐ shuō 。","너에게 할말이 있어","我现在看电视呢。看完了再说吧。","wǒ xiàn zài kàn diàn shì ní 。 kàn wán le zài shuō bā 。","나 지금 TV 보잖아 다 보고 나서 이야기하자","不行，我现在就要说。","bù xíng ， wǒ xiàn zài jiù yào shuō 。","안돼. 난 지금 바로 이야기 해야겠어","那你说吧。我不看了。","nà nǐ shuō bā 。 wǒ bù kàn le 。","그러면 이야기해봐 TV 안볼게"],
	["83","202","真受不了。","zhēn shòu bù le 。","정말 못참겠어","这是什么味儿啊？真受不了。","zhè shì shí me wèi ér ā ？ zhēn shòu bù le 。","이게 무슨 냄새야 정말 못참겠다","我刚回来。还没洗脚。","wǒ gāng huí lái 。 huán méi xǐ jiǎo 。","나 방금 돌아왔어. 아직 발을 안씻었어","打开窗户好吗？快起洗脚！","dǎ kāi chuāng hù hǎo má ？ kuài qǐ xǐ jiǎo ！","창문좀 열어줄래? 빨리 가서 발 씻어!","好的好的，知道了。","hǎo dí hǎo dí ， zhī dào le 。","그래 그래 알았어"],
	["84","204","累死了。","léi sǐ le 。","피곤해 죽겠어","我走不动了。累死了。","wǒ zǒu bù dòng le 。 léi sǐ le 。","나 못 움직이겠어. 피곤해 죽겠어","我们快要到了。","wǒ mén kuài yào dào le 。","우리 곧 도착할거야","我真走不了了。","wǒ zhēn zǒu bù le le 。","나 정말 못 움직이겠어","又不是小孩子了。能不能快起来？","yòu bù shì xiǎo hái zǐ le 。 néng bù néng kuài qǐ lái ？","애도 아니고 빨리 일어나지 못해!"],
	["85","206","恭喜你啊。","gōng xǐ nǐ ā 。","축하해","高兴极了，我考上大学了。","gāo xīng jí le ， wǒ kǎo shàng dà xué le 。","정말 기뻐 나 대학에 붙엇어","恭喜你啊！","gōng xǐ nǐ ā ！","축하해!","谢谢你，我会更努力的。","xiè xiè nǐ ， wǒ huì gēng nǔ lì dí 。","고마워. 나 더욱 노력할거야","慢慢儿走！你一定会成功！","màn màn ér zǒu ！ nǐ yī dìng huì chéng gōng ！","천천히 해! 넌 반드시 성공할거야"],
	["86","208","我想一个人静静。","wǒ xiǎng yī gè rén jìng jìng 。","혼자 조용히 있고 싶어","跟我一起去百货店吧。","gēn wǒ yī qǐ qù bǎi huò diàn bā 。","나랑 같이 백화점 가자","今天我不想出去。想在家休息。","jīn tiān wǒ bù xiǎng chū qù 。 xiǎng zài jiā xiū xī 。","오늘 나 밖에 나가고 싶지 않아. 집에서 쉬고싶어","一起去吧。我带你去很贵的餐厅。","yī qǐ qù bā 。 wǒ dài nǐ qù hěn guì dí cān tīng 。","같이 가자. 내가 진짜 비싼 식당에 데려갈게","哪儿都不想去。我想一个人静静。","nǎ ér dū bù xiǎng qù 。 wǒ xiǎng yī gè rén jìng jìng 。","아무데도 가고 싶지 않아. 혼자 조용히 있고 싶어."],
	["87","210","谁都可以。","shuí dū kě yǐ 。","누구든 괜찮아","听说这个周末是你的生日，是吗？","tīng shuō zhè gè zhōu mò shì nǐ dí shēng rì ， shì má ？","듣자하니 이번 주말에 너 생일이라며. 그렇지?","是啊，谁告诉你的？要不要你也来玩儿？","shì ā ， shuí gào sù nǐ dí ？ yào bù yào nǐ yě lái wán ér ？","맞아. 누가 알려준거야? 너도 와서 놀지 않을래?","我可以去吗？","wǒ kě yǐ qù má ？","나 가도 돼?","谁都可以。","shuí dū kě yǐ 。","누구든 와도 돼."],
	["88","212","你需要什么？","nǐ xū yào shí me ？","무엇이 필요 하십니까?","你需要什么？","nǐ xū yào shí me ？","무엇이 필요 하십니까?","我已经预定好了双人间。","wǒ yǐ jīng yù dìng hǎo le shuāng rén jiān 。","저는 이미 2인실을 예약 했어요","你把护照带来了吗？","nǐ bǎ hù zhào dài lái le má ？","여권을 가지고 오셨나요?","带了，给你。","dài le ， gěi nǐ 。","가지고 왔어요. 드릴게요"],
	["89","214","我还没说完呢。","wǒ huán méi shuō wán ní 。","나 아직 말 안끝났어","你为什么不让我走呢？","nǐ wéi shí me bù ràng wǒ zǒu ní ？","왜 나 못가게 해?","我还没说完呢。","wǒ huán méi shuō wán ní 。","나 아직 말 안끝났어","我没有话跟你说。","wǒ méi yǒu huà gēn nǐ shuō 。","난 너랑 할말이 없어","你这样走，以后会后悔的！","nǐ zhè yàng zǒu ， yǐ hòu huì hòu huǐ dí ！","너 이렇게 가면 나중에 후회할거야"],
	["90","216","你爱上她了。","nǐ ài shàng tā le 。","너 사랑에 빠졌구나","她喜欢做什么？ 你能告诉我吗？","tā xǐ huān zuò shí me ？   nǐ néng gào sù wǒ má ？","걔는 뭘하는걸 좋아해? 알려 줄 수있어?","哈哈，我看，你爱上我了，是吧？","hā hā ， wǒ kàn ， nǐ ài shàng wǒ le ， shì bā ？","하하 내가 보니까 너 사랑에 빠졌구나 그렇지?","你就告诉我吧。","nǐ jiù gào sù wǒ bā 。","그냥 알려줘봐","她跟你一样喜欢看书。","tā gēn nǐ yī yàng xǐ huān kàn shū 。","걔는 너랑 똑같이 책보는거 좋아해"],
	["91","220","你比以前漂亮多了。","nǐ bǐ yǐ qián piāo liàng duō le 。","너 예전보다 더 이뻐졌어","你比以前漂亮多了。","nǐ bǐ yǐ qián piāo liàng duō le 。","너 예전보다 더 이뻐졌어","谢谢，我减了十多公斤。","xiè xiè ， wǒ jiǎn le shí duō gōng jīn 。","고마워 나 10여 킬로그램 뺐어","哇 你真厉害！是怎么减肥的？","wā   nǐ zhēn lì hài ！ shì zěn me jiǎn féi dí ？","와 정말 대단하다 .어떻게 뺀거야?","减肥很简单，应该少吃点儿，多运动。","jiǎn féi hěn jiǎn dān ， yīng gāi shǎo chī diǎn ér ， duō yùn dòng 。","다이어트는 간단해 적게 먹고 많이 운동해야해"],
	["92","222","过奖了。","guò jiǎng le 。","과찬이에요","你的篮球技术很棒。","nǐ dí lán qiú jì shù hěn bàng 。","너 농구 기술 대단하다.","获奖了，你也很好。","huò jiǎng le ， nǐ yě hěn hǎo 。","과찬이에요 당신도 대단해요","我没有你那么好。我想跟你学习。","wǒ méi yǒu nǐ nà me hǎo 。 wǒ xiǎng gēn nǐ xué xí 。","난 너만큼 좋지 않아 너한테 배우고 싶어","可以啊。你想学习什么就问我吧。","kě yǐ ā 。 nǐ xiǎng xué xí shí me jiù wèn wǒ bā 。","좋습니다. 뭐 배우고 싶은게 있으면 나한테 물어보세요"],
	["93","224","我记得","wǒ jì dé","제기억에는…","我们找错地方了吗？连一个人也没有。","wǒ mén zhǎo cuò dì fāng le má ？ lián yī gè rén yě méi yǒu 。","우리가 장소를 잘못 찾은건가? 한 명도 없어.","怎么会? 我记得是这里呀。","zěn me huì ?   wǒ jì dé shì zhè lǐ yā 。","그럴 리가 내 기억엔 여기야","哦，我好像记错了时间。我们早来了一个小时。","ó ， wǒ hǎo xiàng jì cuò le shí jiān 。 wǒ mén zǎo lái le yī gè xiǎo shí 。","오 내가 아마도 시간을 잘못 알았나봐 우리가 한시간 일찍 왔어","吓死我了。那我们在这等吧。","xià sǐ wǒ le 。 nà wǒ mén zài zhè děng bā 。","놀래라. 그러면 우리 여기서 기다리자"],
	["94","226","怎么办？","zěn me bàn ？","어쩌면 좋지?","我的钱包被小偷儿偷走了。","wǒ dí qián bāo bèi xiǎo tōu ér tōu zǒu le 。","내 지갑을 도둑 맞았어","什么？那个小偷儿在哪里？","shí me ？ nà gè xiǎo tōu ér zài nǎ lǐ ？","뭐? 그 도둑 어디있어?","已经跑了！我怎么办？","yǐ jīng pǎo le ！ wǒ zěn me bàn ？","이미 도망갔어. 나 어쩌지?","你哭什么！快去警报吧。","nǐ kū shí me ！ kuài qù jǐng bào bā 。","뭘 울고 있어! 빨리 가서 신고해!"],
	["95","228","你看着办吧。","nǐ kàn zhuó bàn bā 。","네가 알아서 해","要是你不想去的话，就不要去。","yào shì nǐ bù xiǎng qù dí huà ， jiù bù yào qù 。","만약에 네가 가고 싶지 않으면 그냥 가지 마","其实我不知道怎么办。","qí shí wǒ bù zhī dào zěn me bàn 。","사실은 어찌해야 할지 모르겠어","我不勉强你，你看着办吧。","wǒ bù miǎn qiáng nǐ ， nǐ kàn zhuó bàn bā 。","너에게 강요하지 않을테니 네가 알아서 해","好吧，我再好好儿想想吧。","hǎo bā ， wǒ zài hǎo hǎo ér xiǎng xiǎng bā 。","알았어, 내가 다시 한번 생각해 볼게"],
	["96","230","忙得要死","máng dé yào sǐ","바빠죽겠어","这次比赛很重要，你一定得参加呀。","zhè cì bǐ sài hěn zhòng yào ， nǐ yī dìng dé cān jiā yā 。","이번 경기 진짜 중요해 너 반드시 참여 해야해","我现在准备考试，忙得要死。","wǒ xiàn zài zhǔn bèi kǎo shì ， máng dé yào sǐ 。","난 지금 시험 준비해 바빠 죽겠어","只有你来，我们才可以得到冠军。","zhī yǒu nǐ lái ， wǒ mén cái kě yǐ dé dào guān jūn 。","네가 와야만 우리는 우승할 수 있어","好吧好吧。","hǎo bā hǎo bā 。","알았어. 알았어"],
	["97","232","我再也不跟你说话了。","wǒ zài yě bù gēn nǐ shuō huà le 。","다시는 너랑 말하지 않을 거야","你说话真难听。","nǐ shuō huà zhēn nán tīng 。","너 말하는 거 정말 듣기 싫다.","我怎么了？是你先欺负我的。","wǒ zěn me le ？ shì nǐ xiān qī fù wǒ dí 。","내가 뭘? 네가 먼저 나 괴롭혔잖아 ","那也不能骂人！","nà yě bù néng mà rén ！","그래도 욕을 하면 안되지","我再也不跟你说话了。","wǒ zài yě bù gēn nǐ shuō huà le 。","나 다시는 너랑 이야기 하지 않을거야"],
	["98","234","我也希望如此。","wǒ yě xī wàng rú cǐ 。","나도 그렇게 되길 바라","你汉语说得越来越好了。","nǐ hàn yǔ shuō dé yuè lái yuè hǎo le 。","너 중국어 말하는게 날이 갈수록 좋아진다.","我每天学习两三个小时。","wǒ měi tiān xué xí liǎng sān gè xiǎo shí 。","난 매일 두세 시간을 공부해","你真努力。这样的话，你早晚能成为翻译员。","nǐ zhēn nǔ lì 。 zhè yàng dí huà ， nǐ zǎo wǎn néng chéng wéi fān yì yuán 。","너 정말 노력하는구나 이러다가 너 금방 통역사 되겠어","我也希望如此。","wǒ yě xī wàng rú cǐ 。","나도 그렇게 되길 바래"],
	["99","236","我尽快到。","wǒ jìn kuài dào 。","내가 빨리 갈게","你快来吧。大家都找你呢。","nǐ kuài lái bā 。 dà jiā dū zhǎo nǐ ní 。","빨리 와봐.모두가 다 널 찾고 있어","其他人都来了吗？","qí tā rén dū lái le má ？","다른 사람들다 왔어?","除了你以外，都到了。","chú le nǐ yǐ wài ， dū dào le 。","너 빼고 다 왔어","只有我没来？那我尽快到。","zhī yǒu wǒ méi lái ？ nà wǒ jìn kuài dào 。","나 혼자만 안 왔다고? 그러면 내가 빨리 갈게"],
	["100","238","别提多高兴了。","bié tí duō gāo xīng le 。","얼마나 기쁜지 몰라","我终于考上了，别提多高兴了。","wǒ zhōng yú kǎo shàng le ， bié tí duō gāo xīng le 。","나 드디어(시험에) 붙었어 얼마나 기쁜지 몰라","这都是努力的结果。","zhè dū shì nǔ lì dí jié guǒ 。","이건 모두 네가 노력한 결과야","而且我的爸爸给我礼物了。","ér qiě wǒ dí bà bà gěi wǒ lǐ wù le 。","게다가 우리 아빠가 나에게 선물을 주셨어.","你有资格得到这份礼物。","nǐ yǒu zī gé dé dào zhè fèn lǐ wù 。","넌 이 선물을 받을 자격이 있어."]

];