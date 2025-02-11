//cspell:disable
export const trieAnyOrderSecureTrieData = {
  source: 'https://github.com/ethereum/tests/blob/develop/TrieTests/trieanyorder_secureTrie.json',
  commit: '7d66cbfff1e6561d1046e45df8b7918d186b136f',
  date: '2019-01-10',
  tests: {
    singleItem: {
      in: {
        A: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      },
      root: '0xe9e2935138352776cad724d31c9fa5266a5c593bb97726dd2a908fe6d53284df',
    },
    dogs: {
      in: {
        doe: 'reindeer',
        dog: 'puppy',
        dogglesworth: 'cat',
      },
      root: '0xd4cd937e4a4368d7931a9cf51686b7e10abb3dce38a39000fd7902a092b64585',
    },
    puppy: {
      in: {
        do: 'verb',
        horse: 'stallion',
        doge: 'coin',
        dog: 'puppy',
      },
      root: '0x29b235a58c3c25ab83010c327d5932bcf05324b7d6b1185e650798034783ca9d',
    },
    foo: {
      in: {
        foo: 'bar',
        food: 'bass',
      },
      root: '0x1385f23a33021025d9e87cca5c66c00de06178807b96a9acc92b7d651ccde842',
    },
    smallValues: {
      in: {
        be: 'e',
        dog: 'puppy',
        bed: 'd',
      },
      root: '0x826a4f9f9054a3e980e54b20da992c24fa20467f1ca635115ef4917be66e746f',
    },
    testy: {
      in: {
        test: 'test',
        te: 'testy',
      },
      root: '0xaea54fb6c80499674248a462864c420c9d9f3b3d38c879c12425bade1ad76552',
    },
    hex: {
      in: {
        '0x0045': '0x0123456789',
        '0x4500': '0x9876543210',
      },
      root: '0xbc11c02c8ab456db0c4d2728b6a2a6210d06f26a2ace4f7d8bdfc72ddf2630ab',
    },
  },
}
