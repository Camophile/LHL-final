exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shelter').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shelter').insert({name: 'The Salvation Army Harbour Light', location: '119 E Cordova St', notes: 'Enter from backdoor.', email: 'salvation@email.com', phone_number: '(604) 646-6800', picture: 'salvation_army.png', description: 'Sharing the love of Jesus Christ, meeting human needs and offering a transforming influence in the communities of our world.'}),
        knex('shelter').insert({name: 'Catholic Charity Mens Hostel', location: '828 Cambie St', notes: 'Food always welcome!', email: 'catholic@email.com', phone_number: '(604) 443-3292', picture: 'hostel.jpg', description: 'Provides shelter for transient or destitute men, modeling the caring and compassionate spirit of Jesus Christ.'}),
        knex('shelter').insert({name: 'First United Church Community Ministry Society', location: '320 East Hastings Street', notes: 'We really like apples.', email: 'first@email.com', phone_number: '(604) 681-8365', picture: 'first_united.png', description: 'A place of welcome for people experiencing homelessness and poverty in Vancouver’s Downtown Eastside.'}),
        knex('shelter').insert({name: 'First Place Residence - Lookout Society', location: '188 E 1st Ave', notes: 'Good housing support, organics always welcome.', email: 'lookout@email.com', phone_number: '(604) 558-4022', picture: 'lookout.jpg', description: 'A non-profit charitable organization offering a range of services and housing to adult men and women who require assistance.'}),
        knex('shelter').insert({name: 'Union Gospel Mission', location: '601 E Hastings St', notes: 'Help always welcome!', email: 'union@email.com', phone_number: '(604) 253-3323', picture: 'ugm.jpg', description: 'Meals, shelter, outreach and chaplaincy services that relieve suffering and renew hope.'})
      ]);
    });
};
