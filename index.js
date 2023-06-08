const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_PROD_URL)
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));

  const Random = new mongoose.Schema({
    data: [
        {
            content: String
        },
    ]
  })

  const RandomData = mongoose.model('RandomData', Random);

  const newData = new RandomData({
    data: [
        {
          content:  "Earth, the third planet from the Sun, is a dynamic and diverse planet within the vastness of the universe. Teeming with life, it possesses a delicate atmosphere that nurtures and shields its inhabitants. From the geological forces shaping its landforms to the intricate water cycle circulating its abundant resources, Earth is a planet of constant change and interconnected systems. Its remarkable biodiversity, a result of millions of years of evolution, showcases the wonders of life, from microscopic organisms to majestic mammals. Humans, with their extraordinary achievements and scientific pursuits, have expanded our understanding of the universe, unraveling its fundamental laws and pushing the boundaries of exploration."+
    
            "The surface of Earth is a mosaic of captivating features. Towering mountain ranges, carved by tectonic forces, grace its landscapes, while meandering rivers shape valleys and nourish surrounding ecosystems. Volcanoes, both dormant and active, remind us of the planet's fiery origins. The vast expanse of oceans, covering about 71% of Earth's surface, harbors intricate marine ecosystems and drives weather patterns that influence the entire planet."+
            
            "Life on Earth is a tapestry of interwoven threads, each species playing a unique role in the intricate web of existence. From the lush rainforests to the barren deserts, life has adapted to diverse environments, showcasing incredible resilience and innovation. Through the process of evolution, species have flourished, diversified, and filled every available niche on land, in the air, and in the depths of the oceans."+
            
            "As a species, humans have achieved remarkable feats. Our thirst for knowledge has driven scientific inquiry, leading to breakthroughs in medicine, technology, and our understanding of the cosmos. From harnessing the power of electricity to reaching the Moon, our endeavors have shaped the course of history. Yet, we face challenges as well. Climate change, loss of biodiversity, and environmental degradation threaten the delicate balance of life on Earth. It is our responsibility to recognize these challenges and work collectively to preserve and protect our planet."+
            
            "With a growing awareness of our interconnectedness and the need for sustainability, efforts are underway to promote conservation, renewable energy sources, and responsible stewardship of Earth's resources. It is through our collective actions and choices that we can forge a path towards a brighter and more sustainable future for our planet and all its inhabitants."+
            
            "Earth, our home in the vast cosmos, is a testament to the beauty and complexity of the natural world. Let us continue to marvel at its wonders, explore its mysteries, and work tirelessly to ensure its preservation for generations to come."
        },
        {
            content: "The human brain, a remarkable organ nestled within the intricate workings of our bodies, is the epicenter of our consciousness and cognitive abilities. It holds immense power, with billions of neurons firing electrically and chemically to process information, store memories, and generate thoughts. From the wonders of imagination to the complexities of problem-solving, the human brain is a testament to the marvels of nature and the incredible potential of the human mind."+
    
            "Neuroplasticity, the brain's ability to adapt and reorganize itself, allows for learning and growth throughout our lives. Every experience, every new skill acquired, shapes the neural connections within our brains, forging pathways that shape our perceptions and actions. This remarkable characteristic empowers us to continuously learn, develop new talents, and expand our understanding of the world around us."+
            
            "The study of genetics, the blueprint of life encoded within our DNA, reveals the intricacies of heredity and the diversity of life forms. Genes contain the instructions for the development and functioning of organisms, passing on traits from one generation to the next. Through the field of genetics, scientists have made groundbreaking discoveries, unraveling the secrets of inherited diseases, exploring our shared ancestry, and unlocking the potential of gene therapies."+
            
            "The exploration of space, a daring endeavor that stretches the boundaries of human imagination and technological prowess, has provided us with breathtaking views of distant galaxies and a deeper understanding of our place in the universe. Space telescopes and robotic missions have unveiled the wonders of our celestial neighbors, while astronauts have ventured beyond our planet to live and work in microgravity environments."+
            
            "Technology, a product of human ingenuity, has revolutionized the way we live, work, and communicate. From the invention of the wheel to the advent of computers and the internet, each technological advancement has propelled us forward, opening up new possibilities and transforming societies. The rapid pace of technological innovation continues to shape our world, from artificial intelligence and robotics to renewable energy and biotechnology."+
            
            "History, the tapestry of human experiences woven through time, provides us with valuable insights into our past and a foundation for shaping our future. Through the study of historical events, we gain perspective, learn from the triumphs and failures of our predecessors, and understand the forces that have shaped our societies. It is through the lessons of history that we can make informed decisions and strive for a better world."+
            
            "Culture, the rich tapestry of beliefs, traditions, and expressions of human creativity, reflects the diversity and beauty of our global community. From art and music to literature and cuisine, culture embodies the essence of our collective heritage. It is through the celebration and preservation of cultural traditions that we foster understanding, promote unity, and embrace the richness of human experience."+
            
            "Nature, a source of awe and inspiration, offers us solace, harmony, and a profound connection to the world around us. From the majestic mountains and serene forests to the delicate ecosystems and abundant wildlife, nature reminds us of our responsibility to be caretakers of our planet. By appreciating and protecting the natural world, we ensure its preservation for future generations."
        },
        {
            content: "Science, the systematic pursuit of knowledge and understanding, fuels our curiosity about the world and drives innovation. Through observation, experimentation, and rigorous analysis, scientists unravel the mysteries of the natural world. From unraveling the secrets of the atom to decoding the complexities of the human genome, scientific discoveries have transformed our lives and shaped the course of human civilization."+

            "Medicine, a testament to the progress of human ingenuity, has advanced our ability to heal, prevent, and treat diseases. From ancient herbal remedies to cutting-edge therapies, medical science has saved countless lives and alleviated suffering. Through research and collaboration, medical professionals strive to push the boundaries of knowledge and improve the well-being of individuals and communities."+
            
            "Education, the cornerstone of personal and societal growth, empowers individuals to reach their full potential. It equips us with the skills, knowledge, and critical thinking abilities necessary to navigate the complexities of the world. From early childhood education to lifelong learning, education is the key that unlocks doors of opportunity and drives social progress."+
            
            "Sustainability, a global imperative in the face of environmental challenges, calls for responsible stewardship of our planet's resources. By adopting sustainable practices, we strive to balance economic growth with ecological preservation and social well-being. From renewable energy to waste reduction and conservation efforts, sustainability initiatives aim to safeguard the health and vitality of our planet for future generations."+
            
            "Art, the expression of human creativity and imagination, adds color, emotion, and beauty to our lives. Through painting, sculpture, music, dance, and other forms of artistic expression, we find inspiration, convey our thoughts and emotions, and explore the depths of the human experience. Art transcends boundaries, connects people, and stimulates dialogue, enriching our cultural heritage."+
            
            "Philosophy, the love of wisdom and the pursuit of truth, delves into fundamental questions about existence, morality, and the nature of reality. Philosophical inquiry challenges us to think critically, reflect on our values, and contemplate the meaning and purpose of life. Through philosophical exploration, we seek to deepen our understanding of ourselves, our place in the world, and the complexities of the human condition."+
            
            "Innovation, the driving force behind progress, sparks new ideas, technologies, and solutions to societal challenges. From groundbreaking inventions that revolutionize industries to incremental improvements that enhance our daily lives, innovation propels us forward. It fosters economic growth, improves quality of life, and paves the way for a brighter future."+
            
            "Collaboration, the power of individuals coming together, amplifies our collective impact. Through cooperation, we can tackle complex problems, drive positive change, and build bridges of understanding among diverse communities. Collaboration nurtures empathy, promotes inclusivity, and strengthens the fabric of our societies."+
            
            "Through embracing the wonders of science, advancements in medicine, the transformative power of education, sustainable practices, artistic expression, philosophical inquiry, innovative thinking, and the strength of collaboration, we can shape a better world for ourselves and future generations. Let us harness our collective potential, fueled by knowledge, compassion, and a shared vision, to create a future that celebrates the best of humanity and leaves a lasting legacy of progress and unity."
        },
        {
            content: "Technology, the driving force of the modern age, has revolutionized every aspect of our lives. From the advent of the internet and smartphones to artificial intelligence and automation, technology has transformed the way we communicate, work, and interact with the world. It has bridged distances, connected cultures, and opened up unprecedented opportunities for innovation and progress."+

            "Globalization, the interconnectedness of nations and economies, has reshaped our world into a tightly-knit global community. Through the exchange of goods, ideas, and knowledge, we have become more interconnected than ever before. Globalization has created new economic opportunities, fostered cultural exchange, and encouraged collaboration across borders."+
            
            "Diversity, the tapestry of human differences, enriches our societies and broadens our perspectives. It encompasses the richness of cultures, languages, traditions, and beliefs that exist around the globe. Embracing diversity fosters understanding, empathy, and inclusivity, enabling us to build harmonious and vibrant communities that celebrate the unique contributions of every individual."+
            
            "Sustainability, the urgent call to protect our planet and its resources, has become a critical focus in the face of environmental challenges. By adopting eco-friendly practices, promoting renewable energy, and reducing our carbon footprint, we strive to preserve the delicate balance of our ecosystems and ensure a habitable planet for future generations."+
            
            "Empowerment, the belief in the inherent potential and rights of every individual, drives social progress and equality. Empowerment means providing access to education, healthcare, and economic opportunities for all, regardless of gender, race, or socioeconomic background. By empowering individuals and communities, we can build a more just and inclusive world."+
            
            "Human rights, the fundamental freedoms and protections to which all individuals are entitled, form the bedrock of a just society. Upholding human rights means safeguarding the dignity, equality, and well-being of every person. It requires us to challenge injustice, advocate for equality, and create a world where everyone can live with freedom and respect."+
            
            "Resilience, the ability to bounce back from adversity, is a testament to the strength of the human spirit. In the face of challenges, whether personal or global, resilience enables us to persevere, adapt, and grow. It fuels our capacity to overcome obstacles, embrace change, and build a more resilient future."+
            
            "Compassion, the empathy and kindness we show towards others, is the essence of our shared humanity. It drives acts of generosity, understanding, and support, fostering a sense of community and unity. Compassion bridges divides, brings hope to those in need, and reminds us of the power of love and empathy."+
            
            "By harnessing the transformative power of technology, embracing the opportunities of globalization, celebrating diversity, promoting sustainability, empowering individuals, upholding human rights, cultivating resilience, and nurturing compassion, we can create a world that is more connected, inclusive, and sustainable. Let us come together, with a shared commitment to building a better future, and create a legacy of progress and harmony that will resonate for generations to come."
        },
        {
            content: "Innovation, the driving force behind human progress, fuels our quest for continuous improvement and advancement. It ignites our imagination, pushes the boundaries of what is possible, and creates solutions to the challenges we face. From groundbreaking scientific discoveries to technological breakthroughs and creative endeavors, innovation propels us forward, shaping the world we live in."+

            "Entrepreneurship, the spirit of ingenuity and enterprise, empowers individuals to turn ideas into reality. Entrepreneurs identify opportunities, take calculated risks, and build businesses that drive economic growth and create jobs. They embody the drive, resilience, and vision necessary to bring about meaningful change and shape the future."+
            
            "Collaboration, the power of teamwork and collective effort, amplifies our potential and accelerates progress. By working together, we pool our diverse skills, knowledge, and resources to solve complex problems, spark innovation, and achieve shared goals. Collaboration fosters synergy, encourages mutual understanding, and drives positive change at local, national, and global levels."+
            
            "Sustainability, the imperative to protect our planet and its resources, guides our actions towards a greener and more resilient future. It calls for responsible practices that balance environmental preservation, social well-being, and economic prosperity. Sustainable development ensures that the needs of present and future generations are met, without compromising the health of our planet."+
            
            "Education, the key to personal and societal growth, unlocks opportunities and empowers individuals to reach their full potential. It equips us with knowledge, critical thinking skills, and the ability to adapt to an ever-changing world. Education nurtures curiosity, fosters creativity, and cultivates informed citizens who can contribute meaningfully to their communities."+
            
            "Equality, the principle that every person deserves fair and equal treatment, lies at the heart of a just society. It means ensuring that everyone, regardless of their gender, race, ethnicity, or background, has access to the same rights, opportunities, and resources. Equality promotes social cohesion, fosters inclusivity, and creates a society where everyone can thrive."+
            
            "Healthcare, the provision of medical services and support, is essential for the well-being and quality of life of individuals and communities. Accessible and affordable healthcare ensures that everyone has the opportunity to lead a healthy and fulfilling life. It encompasses prevention, treatment, and support services that address physical, mental, and social well-being."+
            
            "Social justice, the pursuit of fairness and equity, aims to address systemic inequalities and create a society where every person is treated with dignity and respect. It requires us to challenge discrimination, advocate for marginalized groups, and dismantle barriers that hinder social progress. Social justice promotes a society where everyone has equal rights, opportunities, and access to resources."+
            
            "By embracing innovation, fostering entrepreneurship, nurturing collaboration, promoting sustainability, prioritizing education, striving for equality, investing in healthcare, and championing social justice, we can create a world that is prosperous, inclusive, and just. Let us harness our collective potential, driven by these principles, to shape a future where every individual can thrive and contribute to a better world for all."
        },
        {
            content: "Nature, the awe-inspiring tapestry of life, provides us with a sanctuary of beauty and a source of inspiration. From the majestic mountains to the tranquil forests, nature's wonders captivate our senses and remind us of the interconnectedness of all living beings. It nurtures our well-being, stirs our imagination, and invites us to embrace a harmonious relationship with the natural world."+

            "Community, the essence of human connection, brings us together in shared purpose and support. It is within the embrace of community that we find belonging, empathy, and a sense of shared identity. Communities foster social cohesion, resilience, and collective progress, providing a network of care and collaboration that enriches our lives."+
            
            "Creativity, the expression of our unique perspectives and imagination, fuels innovation, art, and problem-solving. It allows us to transcend boundaries, challenge conventions, and create something new and meaningful. Creativity inspires us to explore the depths of our potential, celebrate diversity, and infuse joy into our daily lives."+
            
            "Empathy, the ability to understand and share the feelings of others, bridges divides and cultivates compassion. It nurtures kindness, promotes inclusivity, and drives positive social change. By embracing empathy, we cultivate a more caring and interconnected world where we seek to uplift and support one another."+
            
            "History, the chronicle of human experiences and achievements, provides us with valuable lessons and insights. It reminds us of our collective journey, the struggles and triumphs of those who came before us, and the importance of preserving our cultural heritage. History empowers us to learn from the past, shape the present, and forge a better future."+
            
            "Justice, the pursuit of fairness and equality, forms the cornerstone of a just society. It requires us to uphold the rights and dignity of every individual, to challenge injustice, and to advocate for systemic change. Justice nurtures trust, fosters social harmony, and ensures that every person has equal access to opportunities and resources."+
            
            "Curiosity, the thirst for knowledge and understanding, is the driving force behind scientific inquiry, exploration, and personal growth. It compels us to question, to seek answers, and to expand the boundaries of our knowledge. Curiosity opens doors to new possibilities, fuels innovation, and enriches our lives with discovery."+
            
            "Gratitude, the practice of acknowledging and appreciating the blessings in our lives, fosters contentment, resilience, and a sense of abundance. It reminds us to cherish the simple joys, express appreciation for others, and cultivate a positive mindset. Gratitude allows us to find happiness in the present moment and to nurture deeper connections with ourselves and those around us."+
            
            "By honoring nature, embracing community, nurturing creativity, cultivating empathy, learning from history, advocating for justice, fueling curiosity, practicing gratitude, we can create a world that celebrates the beauty of diversity, fosters connection and compassion, and empowers individuals to thrive. Let us cherish these values and weave them into the fabric of our lives as we shape a brighter future for generations to come."
        },
        {
            content: "Courage, the inner strength that propels us forward in the face of adversity, is a powerful force that drives personal growth and transformation. It empowers us to step outside our comfort zones, overcome fears, and pursue our dreams. With courage, we can navigate the challenges of life, embrace new opportunities, and become the best version of ourselves."+

            "Resilience, the ability to bounce back from setbacks and persevere in the face of challenges, is a testament to the human spirit. It fuels our determination, strengthens our character, and enables us to weather the storms of life. Resilience empowers us to learn from failures, adapt to change, and emerge stronger and wiser."+
            
            "Compassion, the deep empathy and kindness we show towards others, has the power to heal, uplift, and transform lives. It prompts us to extend a helping hand, offer support, and lend a listening ear to those in need. Compassion creates bonds of understanding and fosters a sense of interconnectedness in our global community."+
            
            "Gratitude, the practice of acknowledging and appreciating the blessings in our lives, cultivates a positive mindset and nurtures our well-being. It reminds us to be thankful for the simple joys, express appreciation for others, and find contentment in the present moment. Gratitude opens our hearts to abundance and enhances our overall sense of happiness."+
            
            "Integrity, the adherence to strong moral principles and values, is the foundation of trust and ethical conduct. It guides our actions, decisions, and interactions with others. With integrity, we strive to do what is right, even when faced with difficult choices, and uphold the highest standards of honesty and fairness."+
            
            "Innovation, the spirit of creativity and curiosity, fuels progress and propels society forward. It drives us to challenge the status quo, seek new solutions, and embrace change. Innovation sparks breakthroughs in science, technology, and the arts, and shapes the world we live in."+
            
            "Inclusivity, the belief in embracing diversity and ensuring equal opportunities for all, fosters a sense of belonging and acceptance. It promotes a society where everyone, regardless of their background, abilities, or identities, is valued and respected. Inclusivity creates spaces where every voice is heard, perspectives are celebrated, and collaboration thrives."+
            
            "Sustainability, the responsible stewardship of our planet's resources, is crucial for the well-being of present and future generations. It calls for mindful practices that balance economic growth, environmental conservation, and social equity. Sustainability aims to preserve the beauty of our natural world and create a harmonious coexistence between humanity and nature."+
            
            "By embracing courage, nurturing resilience, cultivating compassion, practicing gratitude, upholding integrity, fostering innovation, promoting inclusivity, and prioritizing sustainability, we can create a world that values authenticity, empowers individuals, and embraces harmony with the planet. Let us embody these principles in our lives and inspire positive change for the betterment of ourselves and the world around us."
        },
        {
            content: "Adventure, the spirit of exploration and discovery, beckons us to step outside our comfort zones and embrace the unknown. It fuels our curiosity, ignites our passion for new experiences, and broadens our perspectives. Adventure invites us to immerse ourselves in different cultures, traverse breathtaking landscapes, and create lasting memories that enrich our lives."+

            "Empowerment, the process of enabling individuals to realize their full potential, is a catalyst for personal and societal growth. It involves providing access to education, resources, and opportunities that allow people to thrive. Empowerment fosters self-belief, builds confidence, and enables individuals to overcome obstacles and create positive change in their lives and communities."+
            
            "Harmony, the delicate balance and interconnection of elements, is the key to fostering peace, understanding, and cooperation. It encourages us to embrace diversity, seek common ground, and resolve conflicts through dialogue and mutual respect. Harmony nurtures strong relationships, builds bridges between cultures, and paves the way for a more peaceful and united world."+
            
            "Adaptability, the ability to adjust and respond effectively to changing circumstances, is a vital skill in an ever-evolving world. It allows us to navigate uncertainty, seize opportunities, and find innovative solutions to complex problems. Adaptability cultivates resilience, flexibility, and a proactive mindset, empowering us to thrive in dynamic environments."+
            
            "Justice, the pursuit of fairness and equality, is the cornerstone of a just society. It calls for equal rights, opportunities, and treatment for all individuals, regardless of their background, identity, or circumstances. Justice demands accountability, upholds human rights, and strives to eliminate discrimination, ensuring a society where everyone can live with dignity and respect."+
            
            "Curiosity, the insatiable desire to explore and learn, fuels intellectual growth and discovery. It propels us to question, seek knowledge, and embrace new ideas. Curiosity fosters a lifelong love of learning, expands our horizons, and drives innovation in science, arts, and technology."+
            
            "Unity, the recognition of our shared humanity and interconnectedness, is the foundation of a harmonious and inclusive society. It transcends boundaries, bridges divides, and promotes empathy and collaboration. Unity celebrates our common values, promotes social cohesion, and empowers us to work together for the betterment of all."+
            
            "Sustainability, the responsible stewardship of our planet's resources, is essential for the preservation of our environment and the well-being of future generations. It involves conscious choices and practices that promote environmental protection, reduce waste, and mitigate climate change. Sustainability ensures a balanced and thriving planet for present and future inhabitants."+
            
            "By embracing adventure, fostering empowerment, seeking harmony, cultivating adaptability, championing justice, nurturing curiosity, fostering unity, and prioritizing sustainability, we can shape a world that celebrates diversity, empowers individuals, and preserves the beauty of our planet. Let us embody these values and work together to create a brighter future for ourselves and generations to come."
        },
        {
            content: "Wisdom, the culmination of knowledge and experience, guides our decisions and actions with discernment and insight. It is the result of a lifelong journey of learning, reflection, and self-discovery. Wisdom enables us to navigate complex situations, make sound judgments, and find meaning and purpose in our lives."+

            "Respect, the recognition and appreciation of the inherent worth and dignity of every individual, forms the foundation of harmonious relationships and inclusive communities. It fosters empathy, cultivates kindness, and encourages us to honor the diverse perspectives, cultures, and beliefs of others. Respect creates a culture of mutual understanding and acceptance."+
            
            "Balance, the equilibrium between different aspects of our lives, is essential for our well-being and fulfillment. It involves nurturing our physical, mental, and emotional health, as well as maintaining harmony in our relationships, work, and leisure. Balance allows us to lead lives of purpose, joy, and contentment."+
            
            "Collaboration, the synergy of collective efforts, unleashes the power of teamwork and shared goals. It involves working together, leveraging diverse strengths, and pooling resources to achieve common objectives. Collaboration fosters innovation, drives social progress, and enables us to accomplish more than we could individually."+
            
            "Gratitude, the practice of acknowledging and savoring the blessings in our lives, nurtures a positive mindset and enhances our overall well-being. It invites us to appreciate the simple joys, express appreciation to others, and find contentment in the present moment. Gratitude fosters happiness, resilience, and deeper connections with ourselves and the world."+
            
            "Empathy, the ability to understand and share the feelings of others, fuels compassion, connection, and social harmony. It prompts us to listen deeply, extend a helping hand, and support those in need. Empathy nurtures understanding, breaks down barriers, and fosters a more compassionate and inclusive society."+
            
            "Innovation, the spirit of creativity and problem-solving, drives progress and propels society forward. It involves embracing new ideas, challenging conventions, and finding novel solutions to complex challenges. Innovation fuels technological advancements, social change, and the pursuit of a better future."+
            
            "Sustainability, the responsible stewardship of our planet's resources, is vital for the well-being of current and future generations. It requires mindful practices that promote environmental conservation, reduce waste, and mitigate the impacts of climate change. Sustainability ensures the preservation of our natural world and fosters a harmonious relationship between humanity and the planet."+
            
            "By embodying wisdom, fostering respect, seeking balance, embracing collaboration, practicing gratitude, cultivating empathy, driving innovation, and prioritizing sustainability, we can shape a world that values knowledge, embraces diversity, nurtures well-being, and ensures a thriving planet for generations to come. Let us embody these principles and create a future filled with meaning, harmony, and shared prosperity."
        },
        {
            content: "Creativity, the spark that ignites imagination and innovation, allows us to express ourselves, solve problems, and bring beauty into the world. It is the driving force behind art, literature, music, and countless other forms of human expression. Creativity invites us to think outside the box, explore new possibilities, and infuse our lives with inspiration."+

            "Empowerment, the process of enabling individuals to recognize their own potential and take control of their lives, is a catalyst for personal growth and societal progress. It involves providing resources, opportunities, and support to individuals, so they can overcome barriers, achieve their goals, and contribute meaningfully to their communities. Empowerment fosters self-belief, resilience, and a sense of agency."+
            
            "Inclusion, the practice of ensuring that everyone is valued, respected, and given equal opportunities, is the cornerstone of a just and harmonious society. It promotes diversity, embraces differences, and creates spaces where all voices are heard and valued. Inclusion recognizes that every individual brings unique perspectives, experiences, and strengths, and that together we are stronger."+
            
            "Curiosity, the insatiable thirst for knowledge and understanding, fuels intellectual growth and drives scientific and cultural advancements. It prompts us to question, explore, and seek answers to the mysteries of the world. Curiosity encourages lifelong learning, broadens our horizons, and inspires breakthroughs in science, technology, and the arts."+
            
            "Resilience, the ability to bounce back from setbacks, adapt to change, and thrive in the face of adversity, is a powerful strength that resides within each of us. It allows us to learn from challenges, grow stronger, and persevere in the pursuit of our goals. Resilience empowers us to embrace change, overcome obstacles, and create a brighter future."+
            
            "Compassion, the deep empathy and concern for the well-being of others, is the foundation of kindness, understanding, and support. It drives acts of generosity, fosters connections, and helps to build a more compassionate society. Compassion reminds us of our shared humanity and calls us to extend a helping hand to those in need."+
            
            "Sustainability, the responsible and mindful use of resources, is essential for the long-term health and well-being of our planet. It involves practices that minimize waste, protect ecosystems, and promote environmental stewardship. Sustainability recognizes the interconnectedness of all life and strives to ensure a thriving planet for current and future generations."+
            
            "Courage, the inner strength that allows us to face our fears, take risks, and pursue our dreams, is a fundamental attribute of human nature. It propels us to step outside our comfort zones, overcome challenges, and make a positive impact in the world. Courage empowers us to stand up for what we believe in and create positive change."+
            
            "By embracing creativity, fostering empowerment, promoting inclusion, nurturing curiosity, cultivating resilience, practicing compassion, prioritizing sustainability, and embodying courage, we can shape a world that celebrates individuality, empowers all people, fosters harmony with the planet, and creates a brighter future for generations to come. Let us embrace these values and work together to build a more compassionate, creative, and sustainable world."
        },
        {
            content: "Knowledge, the accumulation of information, insights, and understanding, fuels intellectual growth and human progress. It empowers us to make informed decisions, develop innovative solutions, and expand the boundaries of our capabilities. Knowledge is the key that unlocks the doors to discovery, enlightenment, and personal transformation."+

            "Equality, the belief in the inherent worth and equal rights of every individual, forms the bedrock of a just and inclusive society. It advocates for fairness, justice, and the removal of barriers that hinder opportunities for individuals based on their race, gender, religion, or socioeconomic status. Equality fosters a society where everyone can thrive and contribute to the best of their abilities."+
            
            "Community, the interconnected web of individuals, families, and organizations, provides support, belonging, and a sense of shared purpose. It is within communities that we find support, collaboration, and the strength to face challenges together. Community encourages empathy, compassion, and a collective responsibility for the well-being of all its members."+
            
            "Innovation, the process of creating and implementing new ideas, drives progress and fosters societal advancement. It involves thinking differently, challenging conventions, and finding novel solutions to complex problems. Innovation propels technological breakthroughs, social change, and economic growth."+
            
            "Integrity, the adherence to moral and ethical principles, guides our actions and interactions with honesty, fairness, and sincerity. It builds trust, fosters strong relationships, and forms the foundation of a just and harmonious society. Integrity calls us to be true to our values and to act in ways that are consistent with our beliefs."+
            
            "Resilience, the ability to bounce back from adversity and adapt to challenging circumstances, is a strength that empowers us to face life's obstacles with courage and determination. It involves maintaining a positive mindset, learning from setbacks, and finding new ways forward. Resilience allows us to navigate through life's ups and downs and emerge stronger."+
            
            "Sustainability, the responsible stewardship of our planet's resources, is crucial for the long-term health and well-being of both humanity and the environment. It involves practices that minimize waste, protect ecosystems, and promote a balanced use of natural resources. Sustainability ensures that future generations can enjoy the same abundance and beauty of our planet."+
            
            "Empathy, the ability to understand and share the feelings of others, fosters compassion, connection, and social cohesion. It prompts us to listen deeply, to show kindness, and to extend a helping hand to those in need. Empathy builds bridges, nurtures understanding, and promotes a more caring and inclusive world."+
            
            "By embracing knowledge, championing equality, cultivating community, driving innovation, upholding integrity, nurturing resilience, prioritizing sustainability, and practicing empathy, we can shape a world that celebrates diversity, fosters social justice, preserves our planet, and enhances the well-being of all. Let us embrace these values and work together to create a brighter future for ourselves and generations to come."
        },
        {
            content: "Justice, the fair and equitable treatment of all individuals, forms the cornerstone of a just and harmonious society. It ensures that every person is afforded equal rights, opportunities, and protections under the law. Justice demands that we confront and address systemic inequalities, challenge discrimination, and strive for a world where everyone is treated with dignity and respect."+

            "Curiosity, the innate drive to explore, question, and seek understanding, is the spark that ignites learning and intellectual growth. It prompts us to venture into the unknown, discover new perspectives, and expand the boundaries of knowledge. Curiosity fosters a lifelong love of learning, fuels innovation, and opens doors to endless possibilities."+
            
            "Compassion, the deep empathy and care for the suffering of others, moves us to alleviate pain, provide support, and promote the well-being of all beings. It encourages acts of kindness, generosity, and understanding. Compassion reminds us of our shared humanity and calls us to be a source of comfort and healing in a world that often needs it."+
            
            "Inclusivity, the practice of embracing and valuing diversity in all its forms, creates a society where everyone feels welcomed, respected, and included. It celebrates differences of race, ethnicity, gender, sexual orientation, abilities, and perspectives. Inclusivity fosters a sense of belonging, builds bridges across divides, and promotes a society that thrives on the strengths of its diverse members."+
            
            "Courage, the inner strength that enables us to overcome fear, face challenges, and take bold action, is a catalyst for personal growth and positive change. It empowers us to stand up for what is right, speak our truth, and challenge the status quo. Courage inspires us to push beyond our comfort zones and make a difference in the world."+
            
            "Environmental stewardship, the responsible management and preservation of our natural resources and ecosystems, is essential for the well-being of the planet and future generations. It involves sustainable practices that minimize pollution, protect biodiversity, and promote the conservation of natural habitats. Environmental stewardship recognizes the interdependence of all life and strives for a harmonious coexistence between humanity and nature."+
            
            "Empowerment, the process of enabling individuals and communities to realize their full potential, is a catalyst for personal and collective growth. It involves providing access to education, resources, and opportunities that allow individuals to thrive and contribute to society. Empowerment breaks down barriers, fosters self-belief, and creates a more equitable and prosperous world."+
            
            "Resilience, the ability to adapt and recover from adversity, equips us with the strength to overcome challenges and bounce back stronger. It involves developing a positive mindset, cultivating inner resources, and finding meaning in difficult circumstances. Resilience empowers us to face setbacks with courage and persevere in the pursuit of our goals."+
            
            "By upholding justice, nurturing curiosity, practicing compassion, embracing inclusivity, embodying courage, prioritizing environmental stewardship, promoting empowerment, and fostering resilience, we can shape a world that celebrates diversity, upholds fairness, cherishes our planet, and empowers every individual to thrive. Let us embrace these values and work together to create a brighter future for ourselves and generations to come."
        },
        {
            content: "Education, the foundation of knowledge and learning, empowers individuals to reach their full potential and contributes to the progress of society. It equips us with the tools to understand the world, think critically, and cultivate skills that enable us to navigate through life. Education opens doors of opportunity, fosters personal growth, and lays the groundwork for a prosperous future."+

            "Collaboration, the act of working together towards a common goal, fuels innovation, strengthens relationships, and drives meaningful change. It harnesses the power of diverse perspectives, collective wisdom, and shared resources. Collaboration transcends boundaries, promotes synergy, and creates a more interconnected and interdependent world."+
            
            "Empathy, the ability to understand and share the feelings of others, cultivates compassion, builds bridges of understanding, and promotes harmonious relationships. It involves listening with an open heart, valuing diverse experiences, and treating others with kindness and respect. Empathy fosters connections, bridges divides, and promotes a more compassionate and inclusive society."+
            
            "Sustainability, the responsible stewardship of resources, seeks to meet the needs of the present without compromising the ability of future generations to meet their own needs. It involves embracing practices that minimize waste, protect the environment, and promote social and economic well-being. Sustainability recognizes the interconnectedness of all life and strives for a balanced and thriving planet."+
            
            "Innovation, the process of introducing new ideas, methods, or products, drives progress and propels society forward. It involves thinking creatively, challenging conventional wisdom, and embracing a spirit of exploration. Innovation fosters technological advancements, social change, and economic growth."+
            
            "Diversity, the range of human differences and perspectives, enriches our collective experiences, promotes understanding, and fuels creativity. It encompasses differences in race, ethnicity, gender, age, abilities, and more. Diversity encourages us to embrace inclusivity, challenge biases, and build a more vibrant and equitable world."+
            
            "Resilience, the ability to bounce back from adversity and thrive in the face of challenges, empowers individuals and communities to overcome obstacles and reach their goals. It involves developing inner strength, adapting to change, and finding opportunity in setbacks. Resilience inspires perseverance, fosters personal growth, and enables us to face the uncertainties of life with courage."+
            
            "Social justice, the pursuit of equal rights, opportunities, and resources for all individuals, is crucial for building a fair and inclusive society. It involves challenging systemic inequalities, advocating for marginalized communities, and dismantling barriers that hinder progress. Social justice seeks to create a world where everyone is treated with dignity, fairness, and equity."+
            
            "By embracing education, fostering collaboration, practicing empathy, promoting sustainability, driving innovation, celebrating diversity, cultivating resilience, and advocating for social justice, we can create a world that values knowledge, empowers individuals, embraces compassion, protects the planet, sparks creativity, cherishes inclusivity, fosters strength in the face of adversity, and strives for a more equitable and harmonious future. Let us embrace these values and work together to shape a better world for ourselves and generations to come."
        },
        {
            content: "Creativity, the expression of original ideas, perspectives, and solutions, enriches our lives and drives innovation. It sparks imagination, encourages unconventional thinking, and fosters a sense of wonder and curiosity. Creativity transcends boundaries, breaks through limitations, and opens up new possibilities for personal and collective growth."+

            "Adaptability, the ability to adjust and thrive in changing circumstances, is a vital skill in a dynamic and evolving world. It involves embracing flexibility, being open to new experiences, and finding opportunities in the face of challenges. Adaptability empowers us to navigate transitions, seize opportunities, and embrace growth."+
            
            "Gratitude, the practice of recognizing and appreciating the good in our lives, cultivates a positive mindset and fosters emotional well-being. It involves acknowledging and expressing thanks for the blessings, experiences, and relationships that bring joy and meaning to our lives. Gratitude nurtures contentment, enhances relationships, and promotes a sense of abundance."+
            
            "Intuition, the instinctive knowing or understanding without the need for conscious reasoning, serves as a valuable guide in decision-making and problem-solving. It involves tapping into our inner wisdom, trusting our gut feelings, and honoring the power of intuition. Intuition offers insights beyond logical analysis and empowers us to make choices aligned with our deepest values."+
            
            "Mindfulness, the practice of being fully present in the current moment, cultivates a state of heightened awareness and attention. It involves observing our thoughts, emotions, and sensations without judgment. Mindfulness enhances focus, reduces stress, and promotes overall well-being."+
            
            "Respect, the recognition of the inherent worth and dignity of all individuals, forms the foundation of harmonious relationships and inclusive communities. It involves treating others with kindness, empathy, and consideration, regardless of their backgrounds or beliefs. Respect fosters understanding, builds trust, and creates a world where diversity is celebrated."+
            
            "Perseverance, the steadfast determination to pursue goals despite obstacles and setbacks, is a key factor in achieving success. It involves embracing challenges, maintaining a positive attitude, and staying committed to the pursuit of our dreams. Perseverance fuels resilience, strengthens character, and propels us forward even in the face of adversity."+
            
            "Critical thinking, the ability to analyze, evaluate, and interpret information objectively, is crucial in navigating a world abundant with data and perspectives. It involves questioning assumptions, seeking evidence, and making informed judgments. Critical thinking sharpens our intellect, promotes sound decision-making, and empowers us to navigate complexities with clarity."+
            
            "By embracing creativity, cultivating adaptability, practicing gratitude, honoring intuition, fostering mindfulness, embodying respect, nurturing perseverance, and fostering critical thinking, we can shape a world that embraces innovation, thrives in change, cherishes the beauty of life, honors inner wisdom, cultivates present-moment awareness, celebrates diversity, overcomes challenges, values intellectual rigor, and fosters a harmonious and enlightened society. Let us embody these qualities and work together to create a brighter future for ourselves and generations to come."
        },
        {
            content: "Empathy, the ability to understand and share the feelings of others, forms the foundation of meaningful connections and compassionate interactions. It involves stepping into someone else's shoes, listening attentively, and responding with kindness and understanding. Empathy bridges divides, fosters unity, and creates a world where empathy and compassion are at the heart of all relationships."+

            "Integrity, the adherence to strong moral principles and ethical values, guides our actions and shapes our character. It involves honesty, accountability, and a commitment to doing what is right, even in the face of adversity. Integrity builds trust, cultivates respect, and contributes to the creation of a just and principled society."+
            
            "Gratitude, the practice of appreciating the good in our lives, fosters a sense of contentment and joy. It involves recognizing and expressing thanks for the blessings, experiences, and people that bring happiness and fulfillment. Gratitude cultivates positivity, deepens relationships, and nourishes our well-being."+
            
            "Resilience, the ability to bounce back from challenges and setbacks, empowers us to overcome adversity and thrive. It involves adapting to change, staying focused on our goals, and finding strength in difficult times. Resilience fuels perseverance, fosters personal growth, and enables us to navigate life's ups and downs with courage."+
            
            "Innovation, the process of introducing new ideas and solutions, drives progress and societal advancement. It involves thinking creatively, challenging the status quo, and embracing a mindset of continuous improvement. Innovation sparks transformation, fuels discovery, and shapes a future that is dynamic and full of possibilities."+
            
            "Sustainability, the responsible stewardship of our planet's resources, promotes environmental well-being and the long-term preservation of our natural systems. It involves adopting practices that minimize waste, conserve energy, and protect biodiversity. Sustainability fosters a harmonious relationship between humans and the environment, ensuring a healthier and more sustainable future."+
            
            "Diversity, the recognition and celebration of the unique qualities and perspectives of all individuals, enriches our collective experiences and strengthens our communities. It involves embracing differences in race, ethnicity, gender, age, abilities, and more. Diversity fosters inclusivity, promotes understanding, and creates a society that values and respects the inherent worth of every person."+
            
            "Collaboration, the act of working together towards a common goal, harnesses the power of collective intelligence and synergy. It involves effective communication, cooperation, and the sharing of ideas and resources. Collaboration breaks down barriers, fosters innovation, and creates transformative change."+
            
            "By embracing empathy, upholding integrity, practicing gratitude, cultivating resilience, driving innovation, promoting sustainability, celebrating diversity, and fostering collaboration, we can shape a world that is compassionate, principled, joyful, adaptable, forward-thinking, environmentally conscious, inclusive, and united in purpose. Let us embody these values and work together to create a brighter and more harmonious future for all."
        },
      ]
  })


app.get('/save', async(req,res) => {
    await newData.save().then(() => console.log('savesd00'));
    const foundData = await RandomData.find({});
    console.log(foundData);
    res.send(foundData[0].data[14].content);
})

app.get('/delete', async(req,res) => {
    await data.deleteMany({});
    res.send('deleted');
})

  app.listen("8000", (req,res) => {
    console.log('randomData');
  })

 