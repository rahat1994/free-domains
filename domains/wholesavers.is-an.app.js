addSubDomain({
  description: 'wholesavers project development',
  domain: 'is-an.app',
  subdomain: 'wholesavers',
  owner: {
    repo: 'https://github.com/rahat1994/sparkcommerce',
    email: 'rahat392@gmail.com',
  },
  record: {
    CNAME: '<cname-domain>', // e.g.: <your-github-account>.github.io
    TXT: ['list', 'of', 'required', 'txt', 'records'],
    A: ['list', 'of', 'IPv4', 'addresses', 'like', 'a', '127.0.0.1'],
    AAAA: ['list', 'of', 'IPv6', 'addresses', 'like', 'a', '::1'],
    NS: ['list', 'of', 'nameservers'],
  },
  proxy: false,
})
