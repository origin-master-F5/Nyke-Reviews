
const relativeReviewData = [
  {
    header: `Comfortable but sloppy`,
    comment: `These shoes were not what I was expecting.I wear a size 10 in Pegs and 10 in the Vaporfly 4% Flynit so I purchased the React Infinity Run in a size 10. With the Flynit upper on the React Infinities, I was expecting a foot hugging fit and feel similar to the Vaporfly Flynit.That was not the case with React Infinities.The heel stability is frustratingly sloppy.During my first 7 mile run in them this evening, they definitely felt very soft and comfortable, but it also felt like my heel kept slipping out, which bothered me because I couldn't stop thinking about it the for the entire run. My heels did not feel locked in at all like they do in the Vaporflys and not as secure as in the Pegs. To make matters worse, Nike did not include the extra pair of eyelets at the top of the lacing system to create the "runner's loop" that provides a more secure fit for the hindfoot. The wider toe box also seems to take away from foot hugging purpose of the Flynit. Additionally, the Flynit did not seem to respond all that well when turning through corners. I keep getting a sliding sensation of my feet in the React Infinities during these portions of my run. I do believe a size 10 was correct size for me in these because my toes would have been touching the front of the shoe with a 9.5. I honestly don't understand why Flynit was used on these trainers. Flynit is lightweight and makes sense of racing shoes, but why is it needed on everyday training or recovery shoes? Saving a couple ounces just doesn't seem worth it on a pair trainers.`,
    star: 2,
    size: 1,
    comfort: 0,
    durability: 2
  },
  {
    header: `Comfortable Once I Got The Right Size, This Shoe Runs A Half Size Too Small`,
    comment: `After exchanging this shoe for a half size larger I was impressed. This shoe didn’t let me down. I would definitely recommend.`,
    star: 4,
    size: 0,
    comfort: 1,
    durability: 0
  },
  {
    header: `Solid Training Shoe!!`,
    comment: `I am exclusive Nike user when it comes to running so this review is incredibly biased. That being said, I have this in a 4 shoe rotation right now with 2 pairs of Pegasus Turbo 1's and a pair of Turbo 2's. The Turbo 1 is my favorite Nike trainer of all time. The infinity reacts are an awesome addition. I agree with some of the other comments that this is a great recovery day trainer. That's solely what I have been using it for and have done nothing outside with it yet, only treadmill work so far, which is why I gave it an average on durability because I just don't know how it handles outside. Based on the outsole, I would say its a definite improvement over the previous reacts which were not durable at all on the out sole. These reacts are roomier in toe and the flyknit is unbeatable when it comes to comfort. The upper is basically a glove like fit and there is no tongue, its all integrated. The laces have been great and do not come untied unlike some other running shoes Nike has put out, i.e. the Turbo 2's, and the Next%'s. Cushioning is great, although the heel is really squishy if you're a hard core heel striker. The fore foot is wide and incredibly supportive. The mid foot cushioning is a stiffer than the heel and the way the shoe is designed, I feel like it gets me on my toes a little more ( I am a mid foot striker). The white and salmon color looks killer btw. Hope they come out with more colors. I think this shoe could be an all around trainer but I am not there with it yet. I definitely would not race in these but that's also due to the fact that I have Next%'s.`,
    star: 5,
    size: 0,
    comfort: 1,
    durability: 0
  },
  {
    header: `Amazing`,
    comment: `hese shoes are absolutely perfect for me, they are super cushioned with an incredible amount of energy return.`,
    star: 5,
    size: 0,
    comfort: 2,
    durability: 2
  },
  {
    header: `Injury Prevention Could Be True...`,
    comment: `I am a fairly inexperienced runner working towards my first half marathon, and I managed to get shin splints. However, after buying these shoes and started to run again after a recovery period, these feel like they support my feet and overall form way better! Super comfy and durable, the only slight negative that doesn't make them 5 star is they are little bit slippy on the heel... this soon stops after running though. Overall, very happy with how they have helped my running!`,
    star: 4,
    size: 2,
    comfort: 2,
    durability: 2
  },
  {
    header: `Infinity But Not Beyond.`,
    comment: `A well cushioned easy day trainer. Sloppy fitting upper makes any notion of speed work unrealistic. I’m sceptical about the injury prevention claims, but then again I didn’t think I’d improve my running economy after running in the Vaporfly Next% either. Man, was I wrong!`,
    star: 3,
    size: 2,
    comfort: 2,
    durability: 1
  },
  {
    header: `What A Bummer!!!`,
    comment: `I honestly wanted these shoes to work. I am back to running from a 3 year injury hiatus, and with all the research and hype built around the Nike infinity react, I was intrigued that these would be the perfect running shoes in hopes to keep me running injury free as I make my comeback into the running scene. Well I’m sorry to say...despite the hype, the new spacious fit from the flyknit loft and the initial all around feel with the 24% react foam compared to its predecessors, after 40 miles of running, the React foam just gets too soft and unstable to the point my feet are just fatigued each and every time post run. Now although it’s supposed to be another supportive option from the flagship Zoom structure, if you’re low arched to flat footed, and maybe with some moderate to excessive overpronation regardless of gait and foot mechanics, this may not be the best shoe for you. I tried but I have to got to stick firmer cushioning and more structured support from the Zoom structure 22.`,
    star: 3,
    size: 0,
    comfort: 0,
    durability: 1
  },
  {
    header: `Great Running Shoes Infinity > Epic React 2`,
    comment: `Better, wider, fit. More cushiony, more durable. Size up 1/2.`,
    star: 5,
    size: 2,
    comfort: 2,
    durability: 2
  },
  {
    header: `Questionable Quality Control`,
    comment: `Looks and feels great but during my second run, the lace got snagged and now this pair is worthless! It’s unusable. Disappointed by the quality of this Nike shoe which I bought online.`,
    star: 1,
    size: 2,
    comfort: 2,
    durability: 0
  },
  {
    header: `Awesome Winter Running Shoe`,
    comment: `Fantastic winter shoe for running in snow and slush. I live in upstate NY and have been running in this shoe in temps 5 - 30 degrees and they keep my feet dry, warm and comfortable. The mid-sole retains its cushion regardless of the cold temperature. The upper bootie does a great job of keeping the snow and slush out. I am getting very good traction on light covered snowy sidewalks and roadways, anything deeper and your not going to have the best traction. Regarding sizing they my feet are normal width and the shoe fits perfectly. I highly recommend this shoe for cold snowy winter running.`,
    star: 5,
    size: 2,
    comfort: 2,
    durability: 0
  },
  {
    header: `Not Enough Adjust-Ability`,
    comment: `These look amazing. I have flat feet and because of the neoprene booty mixed with the elastic lacing system (that only tightens on the top strap) there just wasn't enough adjust-ability to make them fit right. I also don't think zoomx/react midsole is not as comfortable as just react. Love the looks of the shoe though. I tried to add an insole and it just didn't work. I ended up returning.`,
    star: 4,
    size: 2,
    comfort: 1,
    durability: 1
  },
  {
    header: `Top Notch!!!`,
    comment: `Great running shoe!!!`,
    star: 4,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `The Bomb!`,
    comment: `Superb shoe. Comfort, fit and style. I have fully converted back from ASICS.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `Love This Shoe!`,
    comment: `Sizing is always subjective but I normally wear a 9 and had to buy an 8.5 US in this shoe. Now it fits perfect and the fit is awesome. Honestly if Nike made a vented summer version of this shoe I would run in this year around. More so for the upper. I love the simplicity of the closure system and secure fit. I personally hate traditional shoe laces and find them outdated and cumbersome. This is the future and a vision of what will be standard at some point in some version of design. It just makes since. I would be interested in seeing this upper on a more off-road trail worthy sole like what we are seeing with Nike's trail line of running shoes. And Nike if you read this, make a low price shoe gaiter for your trail running shoes. Something that can detach and be available for nasty mud / snow days. It won't affect sales of this shoe and will enhance the running experience with customers who buy low top running shoes in general.`,
    star: 5,
    size: 2,
    comfort: 2,
    durability: 2
  },
  {
    header: `Incredible`,
    comment: `This shoe is so amazingly comfortable and fits so nicely you will forget you’re wearing them! Amazing for running, even better for walking. Like floating on your feet. I am a size 9.5 in all Nike shoes and the same goes for this one. I haven’t worn them in the rain but I see reviews saying they are amazing for that which they were designed. Best part is there are many color options if so desired. Great!!`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `Excellent Waterproof Runners`,
    comment: `Bought these last week as my feet get sore in winter when wet and pounding the road! I went for a run Saturday and twice the road was flooded badly and I went right through and feet bone dry! I’m size 9 but bought 9.5 and they’re perfect! Really happy`,
    star: 5,
    size: 2,
    comfort: 2,
    durability: 2
  },
  {
    header: `Perfect!`,
    comment: `I got all 3 pair on sale. I had to scoop up a pair of these in all black at full price in fear that they would sell out. The shoe is as comfortable and light as the original. It is amazing how well the tread holds up on them. I’m still wearing my first pair casually. No complaints. Perfect shoe in my opinion.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `A Good Running Shoe`,
    comment: `The good things about this shoe are that it is very much waterproof is lite and also a good fit. The Bad part about this shoe is that it as very low-quality traction so when running in the rain it is a lot more slippery than other shoes. This shoe runs best on`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `Ideal Shoes`,
    comment: `This shoes are good all around, I wear them for school, short runs and at the gym. They run quite small and tight even though i got a half size up, and breaking them in is rather uncomfortable but once you do they are less tight, the do feel very comfortable. The pink is also hot pink, hopefully with a little wear and time, it will turn darker. Overall i do recommend this shoe for anyone who is looking for a casual wear, short runs/sprint and for training at the gym.`,
    star: 4,
    size: 0,
    comfort: 1,
    durability: 2
  },
  {
    header: `Runs Way Too Small`,
    comment: `The shoe itself looks great but even getting my usual size from Nike, I couldn't get my foot in! I think if I were to get a half size bigger it wouldve helped.`,
    star: 4,
    size: 0,
    comfort: 2,
    durability: 2
  },
  {
    header: `Extremely Comfortable And Nice`,
    comment: `These are great - well made, comfortable, easy to get on and off. I love them. Slightly tight sizing, but I did take my size. I use them for just around and walking.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `The Best Keeps Getting Better`,
    comment: `I have ran over one thousand miles the last two years and have worn many different types pf Nike running shoes. Nike keeps making the best even better. I have run in the Free Run Flyknit, the Epic React Flyknit 1, the Rise React Flyknit and now React Infinity Run Flyknit. My immediate impression when first putting on the shoe was how stable the shoe is, it has wider bases at the toes and heels. I also believe the design has a new inner arch support that is noticeable at first but is not noticeable after a few steps. The shoes are extremely well made and light as a feather. Aside from the she looking great, the performance is amazing. The Epic react foam in the souls seems to be the best one i’ve worn yet. Really springy and feels like you are running on clouds. You can feel an immediate difference when you take the shoes off and switch to a different shoe. If you are looking for a really comfortable shoe that also provides the highest level of performance, these shoes are it!`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `INFINITY REACT`,
    comment: `Great improvement over the last two years of the flagship react running shoe. The updated flyknit is a gamechanger. As is the sole difference in width. The plastic? wrap around the heel. I love it all. I thought the React 2 was the best day to day runner but boy was I wrong!`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `Great For Wonky Feet`,
    comment: `Finally Nike tech in a show for people with wonky feet like me. The stability and width is great. Too soon to really comment on durability but really love the cushioning and lateral stability.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 1
  },
  {
    header: `Great Shoes, Happy Knees`,
    comment: `This is a unique and fun shoe for running! There is so much cushioning and it feels nice when you're walking in them but dang does the shoe come alive once you pick up the pace. No more slapping soles on the pavement, these bad boys help with the transition for semi heel strikers like me. Try these out and you'll probably end up getting another pair.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 1
  },
  {
    header: `Lives Up To My Expectations`,
    comment: `This is really a quality running shoe. I have moved away from buying Nikes lately because the shoes I bought didn't often live up to my expectations based on Nike's description and characteristics of shoes. However, after reading a lot of positive reviews I invested in this shoe and it was everything I had hoped for. I am 70 years old and currently training for my 9th marathon. My arches are fairly low to medium and I weigh 170 pounds. I normally wear a neutral shoe. Most of my work is done on the road unless there is really inclimate weather and then I use the treadmill. I got this shoe hoping to find something that I could train in the last 6 weeks or so and then wear in the marathon. I wanted something that was comfortable but not "squishy" and heavy like a lot of cushioned models. I found that this shoe gave me exactly what I wanted. The shoe gives me unbelievable comfort without being "weighty". I still get that feeling for the road without the discomfort of pounding or jarring. I normally use different model shoes for long runs and speed/tempo work, but I find that I can use these for all workouts. I am really impressed with the amount of room in the toe box area. I have medium width feet and find that there is plenty of room for the toes without the feeling of them being "crunched" together. I highly recommend this shoe to anyone looking for a comfortable shoe for the roads.`,
    star: 5,
    size: 2,
    comfort: 2,
    durability: 2
  },
  {
    header: `Amazing shoe!`,
    comment: `5/5. I run 10-20 miles a week when in training. As a casual runner weighing around 190 lbs, I can feel the upgrades to this model and can see why this will be a beloved running shoe. For sizing, they are true to size, 1/2 size up if you're a wide footer. Compared to the Epic React Flyknits 1 & 2, the upper is upgraded to a more durable material than the normal flyknit upper. The newly tooled react midsole and soles is more responsive/durable which is great for your longer/off road(ie. Trackfield, usual flat surfaces) runs. The additional rubber on the soles helps a lot not just in traction but with durablility compared to the react flyknit model. I usually tend have the Pegasus for my go-to model to run with as its a more neutrual/stable shoe for my longer runs. With the Infinity Runs, I can definately see these as my go-to when I want a springy bounce in my step for my 5 mile - half marathon runs. Will definately be using these for my training for the upcoming Nike LA 13.1 run on April 5th.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `Much Better Than Prior Versions`,
    comment: `A bit heavier than I anticipated out of the box, but overall a great feel. My first couple runs were on the treadmill, and thought they were about a 4 star, but after taking them out on the road I liked the way they felt much better. Very solid feeling shoe, good for longer runs. Would not race in these by any means, but not designed for that. Would highly recommend.
`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `Great Multipurpose Shoe - Quite Different From An Epic, Though.`,
    comment: `Not what I was expecting but that’s not necessarily a bad thing. I love the original Epic but with version 2 the tongue area material bunches making them unusable for me. I thought this was an Epic with a roomy toe box and rocker but, to me - a mid foot striker, it feels more like a Pegasus Turbo. The tongue area material is different (much better) and doesn’t bunch for me. This could be a great shoe for someone who doesn’t own different shoes for different purposes. For me personally, it’s an answer to a problem I didn’t have. Guided a athlete to a half marathon at a pace 2m/m slower than what I’d run solo and found these shoes to be very comfortable and reinforced proper biomechanics.`,
    star: 4,
    size: 1,
    comfort: 1,
    durability: 1
  },
  {
    header: `Marathon Training Shoe`,
    comment: `I bought theses shoes to train for a marathon and so far they have not disappointed me. They are extremely comfortable and not too heavy. I love the colors and the texture of it.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `Incredible Shoe`,
    comment: `Overall just an awesome shoe, I'm very impressed with what Nike has done here. In addition to addressing all the issues with the Epic Reacts by making the flyknit fit better, giving the outsole rubber more coverage and adding more foam they've really taken it to the next level with the wider stance and rocker design. The shoe feels incredibly stable and really encourages a proper foot strike, more so then any shoe I've ever ran in. The rocker shape is great too and really gives you the feeling of being propelled a little bit forward. Even though the shoes are a little on the heavy side compared to say the Peg Turbo 2 they really make up for it with the combination of features that will make these a great choice to put a ton of miles on while training for races. Highly recommend anyone include these in their shoe rotation!
`,
    star: 5,
    size: 2,
    comfort: 2,
    durability: 2
  },
  {
    header: `New Release`,
    comment: `Very comfortable textiles. Encourages a midfoot strike. Sorta feels like I'm running slightly downhill.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `My favorite shoe!`,
    comment: `I would definitely buy this again, and I probably will.`,
    star: 5,
    size: 2,
    comfort: 2,
    durability: 2
  },
  {
    header: `A little small`,
    comment: `The sizing seemed a little small to me but after getting the correct size I love it.`,
    star: 4,
    size: 0,
    comfort: 2,
    durability: 2
  },
  {
    header: `Blisters`,
    comment: `I got blisters from these :(.`,
    star: 1,
    size: 0,
    comfort: 0,
    durability: 0
  },
  {
    header: `Birthday Gift!`,
    comment: `A gift for my partner, They loved them!.`,
    star: 5,
    size: 2,
    comfort: 2,
    durability: 2
  },
  {
    header: `Not The Best`,
    comment: `I got the shoes four days ago and they already have stitching coming undone so some parts of the shoe are almost furry from the poor stitching`,
    star: 3,
    size: 1,
    comfort: 1,
    durability: 1
  },
  {
    header: `Love The Colour And Comfort Of The Shoe!`,
    comment: `Being one of the star releases for the year, the nike infinity does not disappoint. I love the freshness in look as well as the hint of pink (the colour looks great in real) and the throughout detailing for the shoes. The shoe has great support around the mid foot which is greater than the heels (it has a 9mm drop) which naturally leads to a mid foot strides and helps me increase the pace. The packaging includes a nike resistance band and a magnetic mirror which are amazing too. The upper of shoe is an engineered mesh and looks great having a hint of pink. I am a week in using the shoes and will definitely update regarding the durability of the shoes and reduced injury but the first impressions are that it’s a superior pair of shoes and the greater mid sole design will definitely help in reducing the injuries. The run in the shoes felt comfortable and the shoes feel light. I haven’t felt any pain so far and planning for it to continue.The outsoles has great rubber support which I am really impressed by. It helped in running in a cold weather in winter. The rubber support also provides great non slip support for road runs.`,
    star: 5,
    size: 2,
    comfort: 2,
    durability: 2
  },
  {
    header: `Light & Stable`,
    comment: `These might have just become my new favorite running shoe. I've been running in the Epic React because I loved the response of the React foam and the light weight of the Flyknit. With the added stability with each foot strike, I will choose these for my long runs and even my speed runs moving forward. I'm in love.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 1
  },
  {
    header: `Odd Shape But Comfortable`,
    comment: `These shoes are extremely wide versus most of my Nike running shoes, meaning I probably could have sized down. They also have a weird shape to them, but once you get used to it, it is pretty comfortable. Ultimately I'll admit I still enjoy my Zoom Fly SP's more but I will incorporate these React Infinity Runs into the mix as I am prone to injury given two knee surgeries, so I do need to help protect my legs during runs!`,
    star: 4,
    size: 2,
    comfort: 1,
    durability: 1
  },
  {
    header: `Oh Yes Nike, Oh Yes!`,
    comment: `FINALLLLLY--- a stability trainer for dedicated runners! I've been playing around trying to find a new Nike running shoe for slow/recovery days and yes m'am this is it! The shoe has a v stable ride without being a control freak. Was able to pick up the pace without feeling sluggish as that has been the case in other models. Excited to see how the shoe will perform over time but from other reviews it seems the shoe will hold up! Will update once I can rack up some mileage on the shoes! Most excited to pack them for my euro trip to keep me on track for a half-marathon!!!`,
    star: 5,
    size: 1,
    comfort: 1,
    durability: 1
  },
  {
    header: `React Gone To An New Level!`,
    comment: `I broke my pair out for the first time yesterday, they are incredibly comfortable, the React has been taken to a new level with these. The biggest improvement over past react shoes is the fit of the foot, the toe box is wider and more comfortable, the flyknit also seems cleaner and stronger than the Epic React. I would highly recommend these if you are looking for a new running shoe. Go with your normal size also, they fit pretty true and maybe even slightly bigger than Epic React 1's or 2's.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `These Are My New Go-To. 100%`,
    comment: `For me, these are great! I use them everyday. Plenty of cushioning on your feet – gives me a comfortable run every step of the way. They help guide the rock from mid-sole strike to front-foot launch!`,
    star: 5,
    size: 0,
    comfort: 2,
    durability: 2
  },
  {
    header: `No More Fear Of Missing Out.`,
    comment: `You know those Saturday afternoons, when you pull up Instagram and see your running friends just completed an awesome long run, but you couldn't go because of your nagging injuries that won't go away. This shoe is the answer to make sure that you won't have to feel that way again. It will not only allow to keep showing up for Saturdays, but you'll even get back out there on Sunday for the easy run you skip every week. You might even show up Tuesdays AND Thursdays for speed work.”`,
    star: 4,
    size: 0,
    comfort: 2,
    durability: 2
  },
  {
    header: `Great Running Shoe For Walking And Short Distance Runs`,
    comment: `I just received a pair of the new CruzRone running shoes. I tried them on today and went to my local gym to run on the treadmill. Felt great and comfortable in the first 10 minutes of running, but when I got to the 30 minute mark of running my legs were getting tired and I was sweating a lot. I think the problem with the CruzRone running shoe, they are a heavy running shoe. The thick heavy react foam around the heels of the running shoe makes them a lot heavier shoe. These are still a great running shoes but for shorter distances, like 5 miles. I have the Nike react flyknit running shoes and I can run much farther with them. I can run 7-10 miles with the Nike flyknits. I'm approaching 60 soon and I run about 50-60 miles on a weekly basis. The Nike react and Cruz running shoes are far the best running shoes over the other running shoe brands out there.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `Unexpected And Extreme Comfort`,
    comment: `I was truly surprised by how comfortable these shoes are to walk in. I manage an automotive shop and im literally on my feet for 12-14hrs everyday. I bought them on a whim and I've never been happier with a purchase. Extreme comfort and excellent durability. The price point was excellent and im really happy to have these in my daily rotation`,
    star: 5,
    size: 2,
    comfort: 2,
    durability: 2
  },
  {
    header: `Well Worth The $$ Spent!!`,
    comment: `Wow! I’m am truly impressed by the performance and the style of this shoe. In any given week I probably do about 3 to 9 miles just outdoor running. The support is outstanding it’s like you’re running on air. My recovery time is optimal as I’ve had no issues. Even though these shoes are gender neutral I would suggest going to half size up. I purchased the crimson color and have gotten all compliments.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `BET ON BLACK`,
    comment: `I would say this a great shoe for comfort in running or walking. The problem I have is the black dye on the sockliner wears off on to your socks! NOT FUN!`,
    star: 4,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `Huge Awkward Slope In Sole RETURNING`,
    comment: `Everything about this particular shoe was perfect, except the awkward slope in the sole. I felt like my feet were sliding down cramming my toes (similar to high heels). I have a huge arch and weigh 110 lbs. I loved the width, length, and the sole did feel amazingly comfortable. I felt like the ball area of the foot needed to be higher in the sole or little grippers in the sole to keep your feet from sliding down. I only tried on these shoes and took a few steps to my immediate dismay, and I am returning these shoes.`,
    star: 2,
    size: 1,
    comfort: 1,
    durability: 1
  },
  {
    header: `Great Shoe`,
    comment: `This is a great shoe. I have to caution people because they run half a six to a whole size smaller so do not but your current size. Other than that, the shoe is very comfortable and a must have.`,
    star: 4,
    size: 0,
    comfort: 2,
    durability: 2
  },
  {
    header: `Excellent Shoe To This Point`,
    comment: `Fits very well. Love the cushioning when I walk. Used for 5 mile walk, and feet felt great at end.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 2
  },
  {
    header: `Are They Designed For Running?`,
    comment: `So they are designed for walking but how do they stack up as a running shoe? I’m a runner and would love to know if they would be an option for running as well as walking.`,
    star: 3,
    size: 1,
    comfort: 1,
    durability: 1
  },
  {
    header: `Most Beautiful And Comfortable Shoes I've Ever Owned.`,
    comment: `These are the most beautiful Nikes I've ever owned (I've owned dozens). The thicker rocker-style sole makes them even more comfortable than normal running shoes on my flat feet. I usually can't wear sneakers all day standing at work, but I am happy to report these passed that demanding test. The video with co-founder Mr. Knight was cute. Glad to be a customer and shareholder. Keep up the great work Nike.`,
    star: 5,
    size: 1,
    comfort: 2,
    durability: 0
  },
  {
    header: `Where Have These Shoes Been All My Life?`,
    comment: `Wow, just WOW! I've been using Nike running shoes for walking as they haven't had special purpose walking shoes for so long. They've been ok but these are outstanding! I walk 5-10 miles a day on a treadmill at work and these are game changers. They are like walking on clouds and my foot fatigue is gone. Ordering three more pair now!`,
    star: 5,
    size: 0,
    comfort: 2,
    durability: 1
  }
]

module.exports = relativeReviewData;