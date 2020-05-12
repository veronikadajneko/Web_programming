(function() {

    let posts = [
        {
            id: '1',
            description: 'как же хорошо, что Вероника наконец делает вёрстку',
            createdAt: new Date('2020-05-05T15:31:00'),
            author: 'ar_kud',
            photoLink: 'tweetphoto/cheer.jpg',
            hashTags: ['фронтендерка'],
            likes: ['ar_kud', 'veronikchaa']
        },

        {
            id: '2',
            description: 'меняю Пашу на Серёжу',
            createdAt: new Date('2020-01-16T03:20:00'),
            author: 'eraztuna',
            photoLink: 'tweetphoto/love.jpg',
            hashTags: ['boy', 'problems'],
            likes: ['veronikchaa', 'ar_kud', 'maxoshka', 'sstrazdinaa']
        },

        {
            id: '3',
            description: 'Понимаю',
            createdAt: new Date('2020-04-05T15:17:00'),
            author: 'maxoshka',
            photoLink: 'tweetpost/understand.jpg',
            hashTags: ['жиза'],
            likes: ['eraztuna', 'veronikchaa']
        },

        {
            id: '4',
            description: 'купи сладкое что-нибудь,тебе нужно.\n'+ 'Просто если с головой какие-то проблемы, то нужен сахар',
            createdAt: new Date('2019-12-14T12:11:25'),
            author: 'ar_kud',
            photoLink: 'tweetpost/needsweet.jpg',
            hashTags: ['sweet', 'sugar'],
            likes: ['sstrazdinaa', 'pvolchetskaya', 'eraztuna' , 'veronikchaa']
        },

        {
            id: '5',
            description: 'шаурма окутана любовью, потому что она завёрнута в loveаш',
            createdAt: new Date('2019-11-12T18:33:00'),
            author: 'VslvaD',
            photoLink: 'tweetpost/loveашь.jpg',
            hashTags: ['fun', 'love', 'food'],
            likes: ['eraztuna', 'veronikchaa', 'ar_kud', 'sstrazdinaa']
        },

        {
            id: '6',
            description: 'вот бы я тоже так тянулась к знаниям, как мой кот к оливкам',
            createdAt: new Date('2019-12-18T23:29:10'),
            author: 'sstrazdinaa',
            photoLink: 'tweetpost/cat.jpg',
            hashTags: ['котики', 'универ', 'оливки'],
            likes: ['veronikchaa', 'maxoshka', 'ar_kud', 'eraztuna']
        },

        {
            id: '7',
            description: 'сегодня взяла неберущийся интеграл',
            createdAt: new Date('2019-10-20T09:00:03'),
            author: 'trofima',
            photoLink: 'tweetpost/integral.jpg',
            hashTags: ['математик', 'famcslove'],
            likes: ['sstrazdinaa', 'pavel.tyl']
        },

        {
            id: '8',
            description: 'чихнуть в метро\n' + 'топ 10 пранков, вышедших из-под контроля',
            createdAt: new Date('2020-03-12T16:02:05'),
            author: 'pvolchetskaya',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
            hashTags: ['#coronavirus', 'sad'],
            likes: ['veronikchaa']
        },

        {
            id: '9',
            description: 'так,для себя нужно записать\n' + 'где право,а где лево,а то я уже путаю',
            createdAt: new Date('2019-09-30T21:07:04'),
            author: 'veronikchaa',
            photoLink: 'tweetpost/leftright.png',
            hashTags: ['какобычно'],
            likes: ['eraztuna', 'maxoshka']
        },

        {
            id: '10',
            description: 'каждый год около 200 человек умирает от укусов диких муравьев',
            createdAt: new Date('2020-04-25T12:23:08'),
            author: 'la_pank_mne',
            photoLink: 'goldrain.jpg',
            hashTags: ['#ужас', 'страшно'],
            likes: ['eraztuna', 'veronikchaa']
        },

        {
            id: '11',
            description: 'я хочу быть красивой, а не в шапке',
            createdAt: new Date('2019-09-21T11:26:07'),
            author: 'eraztuna',
            photoLink: 'tweetpost/mashka.jpg',
            hashTags: ['beautiful', 'girls'],
            likes: ['veronikchaa', 'ar_kud', 'pavel.tyl']
        },

        {
            id: '12',
            description: 'вероника пользуется мужиками',
            createdAt: new Date('2020-04-03T01:29:00'),
            author: 'ar_kud',
            photoLink: 'tweetpost/artemka.jpg',
            hashTags: ['justfriends'],
            likes: ['maxoshka']
        },

        {
            id: '13',
            description: 'справедливо',
            createdAt: new Date('2020-02-20T02:20:00'),
            author: 'maxoshka',
            photoLink: 'tweetpost/understand.jpg',
            hashTags: ['жиза'],
            likes: ['ar_kud']
        },

        {
            id: '14',
            description: 'кто бы мог подумать, что "Поле Чудес" такая весёлая телепереача',
            createdAt: new Date('2019-03-27T19:33:00'),
            author: 'pvolchetskaya',
            photoLink: 'tweetpost/полечудес.jpg',
            hashTags: ['развлечения', 'самоизаляция'],
            likes: ['veronikchaa', 'sstrazdinaa', 'pvolchetskaya', 'eraztuna', 'ar_kud', 'trofima']
        },

        {
            id: '15',
            description: 'петровщина не греет',
            createdAt: new Date('2019-12-05T21:10:00'),
            author: 'eraztuna',
            photoLink: 'tweetpost/petrovshina.jpg',
            hashTags: ['metro', 'winter'],
            likes: ['veronikchaa', 'trofima']
        },

        {
            id: '16',
            description: 'счастье в горах',
            createdAt: new Date('2015-10-20T09:12:03'),
            author: 'la_pank_mne',
            photoLink: 'tweetpost/mountain.jpg',
            hashTags: ['nature', 'happy'],
            likes: ['la_pank_mne', 'veronikchaa']
        },

        {
            id: '17',
            description: 'лучше сделать и пожалеть, чем не сделать и пожалеть',
            createdAt: new Date('2018-02-20T21:10:00'),
            author: 'ghost_of_lack',
            photoLink: 'tweetpost/ola.jpg',
            hashTags: ['life'],
            likes: ['la_pank_mne', 'veronikchaa']
        },

        { 
            id: '18',
            description: 'переделай, мне не нравится',
            createdAt: new Date('2019-10-05T012:10:00'),
            author: 'pavel.tyl',
            photoLink: 'tweetpost/code.jpg',
            hashTags: ['programming'],
            likes: ['veronikchaa', 'eraztuna']
        },

        {
            id: '19',
            description: 'Вероника - солнышко',
            createdAt: new Date('2020-05-12T01:05:26'),
            author: 'maxoshka',
            photoLink: 'tweetpost/sun.jpg',
            hashTags: ['sun'],
            likes: ['eraztuna', 'veronikchaa']
        },

        {
            id: '20',
            description: 'использую два if через main',
            createdAt: new Date('2019-07-20T18:00:03'),
            author: 'trofima',
            photoLink: 'tweetpost/prog.jpg',
            hashTags: ['proga'],
            likes: ['veronikchaa', 'ar_kud']
        }

        ];

        function ifExist(id){
             return posts.findIndex(post => post.id === id) != -1 ;
        }

        function compareDates(a,b){
            return a.createdAt - b.createdAt;
        }

        function getPosts(skip = 0, top = 0, filterConfig = undefined) {

        if (typeof skip !== 'number' || typeof top !== 'number') {
            console.log('Incorrect type');
            return;
        }

        let result = posts;

        if (filterConfig) {

            if (filterConfig.hashTags) {
                result = result.filter(function (post) {
                    if (filterConfig.hashTags.every(hashtag => post.hashTags.includes(hashtag)))
                        return post.hashTags;
                });
            }

            else if (filterConfig.dateSort) {
                result = result.sort(compareDates);
            } 
            else if (filterConfig.author) {
                result = result.filter(function (post) {
                    if (post.author.includes(filterConfig.author))
                        return post.author;
                });
            }

        }

            result.sort(compareDates);
            return result.slice(skip, skip + top);
    }

    function getPost(id) {
            return posts.find(post => post.id === id) || null;
    }

    function validatePost(post) {
        return (post.id != undefined) && 
        (post.description != undefined) &&
        (post.author != undefined && post.author.length > 0);

    }

    function addPost(post){

        if (validatePost(post) && !ifExist(post.id)){
            posts.push(post);
            return true;
        }
        return false;
    }

    function editPost(id, post){
        if (!ifExist(id, posts)) {
            return false;
        }

        var modifiedPost = getPost(id);

        if (post.photoLink) {
            modifiedPost.photoLink = post.photoLink;
        }
        if (post.description) {
            modifiedPost.description = post.description;
        }
        if (post.hashTags) {
            modifiedPost.hashTags = post.hashTags;
        }
        if (validatePost(modifiedPost)) {
            posts.push(modifiedPost);
            return true;
        }
        return false;
    }

    function removePost(id){
        if (ifExist(id, posts)) {
            posts.splice(posts.findIndex(post => post.id === id), 1);
            return true;
        }
        return false;
    }

    //tests

    console.log("Top 6 posts:");
    console.log(getPosts(0,6));

    console.log("Top 20 posts, skip 0 post, author: ar_kud:");
    console.log(getPosts(0,20, {author:'ar_kud'}));

    console.log("Top 10 posts, dateSort");
    console.log(getPosts(0,10, {dateSort:new Date('2019-05-05T00:00:00')}));

    console.log("Top 20 posts, skip 0 posts, hashtag: жиза:");
    console.log(getPosts(0,2, {hashTags: ['жиза']}));

    console.log("Add valid post:");
    console.log(addPost({id:23, description: "description", createdAt: new Date('2019-05-05T00:00:00'), author: 'ghj'}));

    console.log("Add invalid post:");
    console.log(addPost({description: ""}));

    console.log("Edit added post:");
    console.log(editPost('10',{description: "changed"}));
    console.log(getPost('10'));

    console.log("Delete edited post:");
    console.log(removePost('10'));

}());




