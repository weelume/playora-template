import type {Bilingual} from './host'
export const bi=(zh:string,en:string):Bilingual=>({zh,en})
export const asset=(name:string)=>'/templates/playora/images/'+name
export const games=[
 {id:'numbers',name:bi('数字与数学','Math & numbers'),image:'image-276.png',color:'#f043b0',description:bi('从数积木开始，在配对、分类和有趣的小游戏中认识数量、形状与规律。','Count blocks, match shapes and discover patterns through playful little challenges.')},
 {id:'reading',name:bi('字母与阅读','ABC & reading'),image:'image-277.png',color:'#fcd842',description:bi('读图、听故事、认字母，让每一次好奇都变成语言探索。','Explore letters, listen to stories and turn curiosity into a love of language.')},
 {id:'puzzles',name:bi('逻辑与拼图','Logic & puzzles'),image:'image-278.png',color:'#c284fb',description:bi('观察线索、动手拼搭，在尝试与思考中发现自己的解决方法。','Follow clues, build puzzles and discover your own way to solve a challenge.')},
]
export const trust=[
 {title:bi('每一场玩耍\n都有成长','Learning\nwith purpose'),body:bi('围绕观察、逻辑和早期阅读设计活动，让孩子在专注的玩耍中一步步积累能力。','Thoughtful activities build observation, logical thinking and early literacy while keeping children engaged.'),color:'#fa9df3'},
 {title:bi('孩子友好\n安心探索','Kid friendly\nand safe'),body:bi('演示页面不展示广告、不收集儿童资料。上线真实服务前，应由监护人确认隐私设置及数据处理方式。','This demo has no advertising and collects no child profiles. A live service requires guardian-approved privacy settings and clear data handling.'),color:'#ff5314'},
 {title:bi('动手尝试\n发现新本领','Skill based\nactivities'),body:bi('循序渐进的小挑战，陪伴孩子练习解决问题、手眼协调与表达感受。','Step-by-step challenges encourage problem solving, hand-eye coordination and expressing feelings.'),color:'#ed1b36'},
]
export const faq=[
 [bi('什么是 Playora？','What is Playora?'),bi('Playora 是一个趣味学习平台的展示模板，用游戏与互动活动呈现孩子探索、学习和成长的过程。','Playora is a playful learning platform template, showing how games and activities can help children explore, learn and grow.')],
 [bi('适合多大的孩子？','What age group is Playora for?'),bi('示例内容面向 3–8 岁儿童，实际活动应根据孩子兴趣与发展阶段，由家长陪同选择。','The sample content is for ages 3–8. Parents should choose activities to suit each child’s interests and development.')],
 [bi('孩子可以安心使用吗？','Is Playora safe for kids?'),bi('本模板没有广告或真实儿童账户。它不代表已通过任何儿童隐私认证；正式服务需单独完成安全与合规评估。','This template has no ads or real child accounts. It does not claim privacy certification; a live service needs its own safety and compliance assessment.')],
 [bi('家长怎样了解学习进展？','Can parents track progress?'),bi('功能页展示活动分类及陪伴建议。本模板不保存学习记录，也不提供真实的进度追踪服务。','The features page presents activity categories and guidance. This template does not save learning records or provide live progress tracking.')],
 [bi('孩子能学到哪些内容？','What can kids learn?'),bi('可以探索数字、字母、阅读、逻辑与拼图，也可以通过博客了解适合线下进行的亲子活动。','Explore numbers, letters, reading, logic and puzzles, with ideas for offline family activities in the journal.')],
 [bi('每次玩多久比较合适？','How long should kids play?'),bi('建议从短时间、有人陪伴的活动开始，关注孩子的感受，及时休息，并与户外和线下游戏相结合。','Begin with short, accompanied sessions, follow your child’s cues, take breaks and balance screen activities with outdoor and offline play.')],
]
export const articles=[
 {slug:'learning-through-play',title:bi('把日常小事变成学习冒险','Turn everyday moments into learning adventures'),category:bi('亲子陪伴','Family play'),image:'image-276.png',intro:bi('学习不一定从书桌开始，也可以从一盒彩色积木开始。','Learning can begin with a box of colorful blocks, long before a worksheet.'),sections:[
 [bi('从孩子的好奇开始','Start with curiosity'),bi('留意孩子正在观察什么。与其立即告诉答案，不如问一句“你发现了什么？”让孩子有机会描述自己的想法。','Notice what your child is observing. Instead of giving an answer straight away, ask what they have noticed and make space for their ideas.')],
 [bi('让材料保持简单','Keep materials simple'),bi('积木、杯子和纸张都能变成游戏。按颜色分类、比较高矮，再尝试不同的搭建方法，过程本身就是学习。','Blocks, cups and paper can become a game. Sort colors, compare heights and try different constructions. The process is part of learning.')],
 [bi('给尝试留一点空间','Leave room to try'),bi('遇到困难时先陪伴，再一起寻找线索。记录孩子愿意再次尝试的时刻，比记录答对几题更有意义。','When a task feels difficult, stay close and look for clues together. Notice willingness to try again, rather than only counting correct answers.')]]},
 {slug:'reading-together',title:bi('每天十分钟，一起发现阅读的快乐','Find the joy of reading together'),category:bi('阅读启蒙','Early reading'),image:'image-277.png',intro:bi('一本绘本、一段对话，都是表达与想象的起点。','A picture book and a conversation are starting points for expression and imagination.'),sections:[
 [bi('先读图，再读字','Explore pictures first'),bi('请孩子选择最喜欢的画面，说说人物可能正在做什么。没有唯一答案，想象本身就值得被听见。','Invite your child to choose a favorite picture and describe what might be happening. There is no single answer; imagination deserves to be heard.')],
 [bi('一起讲完一个故事','Tell a story together'),bi('轮流补充一句情节，给故事换一个结尾。让孩子知道，阅读不仅是认字，也是理解、分享和创造。','Take turns adding a sentence or invent a new ending. Reading includes understanding, sharing and creating, as well as recognizing words.')]]},
 {slug:'puzzle-time',title:bi('拼图里的耐心与小小成就感','Patience and little victories in puzzle time'),category:bi('逻辑探索','Logic & discovery'),image:'image-278.png',intro:bi('从一块拼图开始，练习观察、比较与坚持。','One puzzle piece at a time, practice observing, comparing and persisting.'),sections:[
 [bi('选择适合的挑战','Choose a helpful challenge'),bi('从孩子能够完成一部分的难度开始。一起找边角、颜色和图案，给线索，不急着替孩子完成。','Start with a puzzle your child can partly solve. Look for edges, colors and patterns together. Offer clues without rushing to finish for them.')],
 [bi('庆祝探索的过程','Celebrate exploration'),bi('说说孩子用了什么方法，而不只是夸“真聪明”。让努力、观察与调整都成为可以看见的进步。','Describe the approach your child used. Notice effort, observation and adjustments, so progress becomes visible beyond the finished puzzle.')]]},
]
export const text={
 learning:bi('趣味学习','Learning'),about:bi('关于我们','About us'),faq:bi('常见问题','FAQ'),contact:bi('联系我们','Contacts'),blog:bi('成长博客','Journal'),explore:bi('探索与玩耍','Explore & play'),more:bi('继续探索','Explore more'),
 hero:bi('让玩耍遇见','Where play meets'),heroWord:bi('快乐学习','Learning'),story:bi('在这里，我们相信孩子在快乐中学得更好。把日常学习变成好玩的游戏，让每一次探索都充满惊喜。','We believe kids learn best when they’re having fun. We turn everyday learning into playful games and interactive adventures.'),
 games:bi('让学习\n像玩耍一样快乐','Learning made\nplayful'),trust:bi('值得家长信赖的\n成长伙伴','Why parents\ntrust'),reviews:bi('孩子的快乐\n家长看得见','Loved by little learners\n& their parents'),questions:bi('家长的疑问\n我们来解答','Parents ask.\nWe answer.'),
 demo:bi('演示表单仅做本地校验，不发送或保存任何信息。','Demo form: local validation only. Nothing is sent or saved.'),done:bi('本地校验通过。尚未发送或保存。','Local validation passed. Nothing has been sent or saved.'),
}
