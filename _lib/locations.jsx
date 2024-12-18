const statesWithCities = [
  {
    state: 'Andhra Pradesh',
    cities: [
      'Visakhapatnam',
      'Vijayawada',
      'Guntur',
      'Nellore',
      'Kakinada',
      'Tirupati',
      'Rajahmundry',
      'Kadapa',
      'Anantapur',
      'Eluru',
      'Chittoor',
      'Srikakulam',
      'Vizianagaram',
      'West Godavari',
      'East Godavari',
      'Nizamabad',
      'Kurnool',
      'Chirala',
      'Tenali',
      'Bapatla',
      'Proddatur'
    ]
  },
  {
    state: 'Arunachal Pradesh',
    cities: [
      'Itanagar',
      'Naharlagun',
      'Pasighat',
      'Aalo',
      'Tezpur',
      'Bomdila',
      'Ziro',
      'Daporijo',
      'Yangte',
      'Miao',
      'Seppa',
      'Lepa Rada',
      'Raga',
      'Hawai',
      'Namsai',
      'Tawang'
    ]
  },
  {
    state: 'Assam',
    cities: [
      'Guwahati',
      'Dibrugarh',
      'Silchar',
      'Jorhat',
      'Tinsukia',
      'Nagaon',
      'Karimganj',
      'Tezpur',
      'Bongaigaon',
      'Goalpara',
      'Haflong',
      'Dhekiajuli',
      'Barpeta',
      'Morigaon',
      'Sivasagar',
      'Sonitpur',
      'Darrang',
      'Kokrajhar'
    ]
  },
  {
    state: 'Bihar',
    cities: [
      'Patna',
      'Gaya',
      'Bhagalpur',
      'Muzaffarpur',
      'Darbhanga',
      'Purnea',
      'Katihar',
      'Saharsa',
      'Sitamarhi',
      'Nalanda',
      'Bihar Sharif',
      'Samastipur',
      'Buxar',
      'Aurangabad',
      'Siwan',
      'Motihari',
      'Chhapra',
      'Bihariganj'
    ]
  },
  {
    state: 'Chhattisgarh',
    cities: [
      'Raipur',
      'Bilaspur',
      'Durg',
      'Korba',
      'Jagdalpur',
      'Rajnandgaon',
      'Dantewada',
      'Kanker',
      'Mahasamund',
      'Dhamtari',
      'Surguja',
      'Balod',
      'Kabirdham',
      'Korba',
      'Gariaband',
      'Bemetara'
    ]
  },
  {
    state: 'Goa',
    cities: [
      'Panaji',
      'Margao',
      'Vasco da Gama',
      'Ponda',
      'Mapusa',
      'Curchorem',
      'Bicholim',
      'Quepem',
      'Sanguem',
      'Canacona',
      'Dharbandora',
      'Verna',
      'Assagao',
      'Pale',
      'Saligao'
    ]
  },
  {
    state: 'Gujarat',
    cities: [
      'Ahmedabad',
      'Surat',
      'Vadodara',
      'Rajkot',
      'Bhavnagar',
      'Jamnagar',
      'Anand',
      'Gandhinagar',
      'Nadiad',
      'Mehsana',
      'Vapi',
      'Junagadh',
      'Morbi',
      'Navsari',
      'Dahod',
      'Kutch',
      'Godhra',
      'Bharuch',
      'Valsad',
      'Palanpur'
    ]
  },
  {
    state: 'Haryana',
    cities: [
      'Gurgaon',
      'Faridabad',
      'Ambala',
      'Hisar',
      'Panchkula',
      'Sonipat',
      'Karnal',
      'Rohtak',
      'Sirsa',
      'Yamunanagar',
      'Kurukshetra',
      'Fatehabad',
      'Bhiwani',
      'Jind',
      'Nuh',
      'Mahendragarh'
    ]
  },
  {
    state: 'Himachal Pradesh',
    cities: [
      'Shimla',
      'Dharamshala',
      'Kullu',
      'Manali',
      'Solan',
      'Hamirpur',
      'Bilaspur',
      'Mandi',
      'Kinnaur',
      'Chamba',
      'Una',
      'Sirmaur',
      'Nahan',
      'Palampur'
    ]
  },
  {
    state: 'Jammu and Kashmir',
    cities: [
      'Srinagar',
      'Jammu',
      'Leh',
      'Sopore',
      'Anantnag',
      'Katra',
      'Pulwama',
      'Bandipora',
      'Kupwara',
      'Rajouri',
      'Poonch',
      'Gulmarg',
      'Bhaderwah',
      'Doda'
    ]
  },
  {
    state: 'Jharkhand',
    cities: [
      'Ranchi',
      'Jamshedpur',
      'Dhanbad',
      'Bokaro',
      'Dumka',
      'Deoghar',
      'Hazaribagh',
      'Giridih',
      'Palamu',
      'Ramgarh',
      'Chatra',
      'Godda',
      'Koderma',
      'Pakur',
      'Sahebganj'
    ]
  },
  {
    state: 'Karnataka',
    cities: [
      'Bangalore',
      'Mysore',
      'Hubli',
      'Dharwad',
      'Mangalore',
      'Belgaum',
      'Bellary',
      'Gulbarga',
      'Udupi',
      'Shimoga',
      'Kolar',
      'Tumkur',
      'Chitradurga',
      'Hassan',
      'Chikkamagaluru',
      'Kodagu',
      'Mandya',
      'Raichur',
      'Bagalkote'
    ]
  },
  {
    state: 'Kerala',
    cities: [
      'Thiruvananthapuram',
      'Kochi',
      'Kozhikode',
      'Kollam',
      'Thrissur',
      'Malappuram',
      'Palakkad',
      'Pathanamthitta',
      'Ernakulam',
      'Idukki',
      'Wayanad',
      'Kasargod',
      'Kottayam',
      'Munnar',
      'Kannur',
      'Kalamassery'
    ]
  },
  {
    state: 'Madhya Pradesh',
    cities: [
      'Bhopal',
      'Indore',
      'Gwalior',
      'Jabalpur',
      'Ujjain',
      'Sagar',
      'Rewa',
      'Satna',
      'Dewas',
      'Khandwa',
      'Khargone',
      'Mandla',
      'Chhindwara',
      'Sidhi',
      'Shivpuri'
    ]
  },
  {
    state: 'Maharashtra',
    cities: [
      'Mumbai',
      'Pune',
      'Nagpur',
      'Thane',
      'Nashik',
      'Aurangabad',
      'Solapur',
      'Kolhapur',
      'Akola',
      'Amravati',
      'Bhiwandi',
      'Kalyan',
      'Latur',
      'Jalna',
      'Ratnagiri',
      'Dhule',
      'Palghar'
    ]
  },
  {
    state: 'Manipur',
    cities: [
      'Imphal',
      'Thoubal',
      'Churachandpur',
      'Kakching',
      'Senapati',
      'Tamenglong',
      'Ukhrul',
      'Bishnupur'
    ]
  },
  {
    state: 'Meghalaya',
    cities: [
      'Shillong',
      'Tura',
      'Jowai',
      'Williamnagar',
      'Baghmara',
      'Nongstoin',
      'Ribhoi'
    ]
  },
  {
    state: 'Mizoram',
    cities: [
      'Aizawl',
      'Lunglei',
      'Champhai',
      'Kolasib',
      'Serchhip',
      'Mamit',
      'Saiha'
    ]
  },
  {
    state: 'Nagaland',
    cities: [
      'Kohima',
      'Dimapur',
      'Mokokchung',
      'Wokha',
      'Zunheboto',
      'Peren',
      'Mon'
    ]
  },
  {
    state: 'Odisha',
    cities: [
      'Bhubaneswar',
      'Cuttack',
      'Rourkela',
      'Berhampur',
      'Sambalpur',
      'Balasore',
      'Angul',
      'Jharsuguda',
      'Koraput',
      'Kendrapara',
      'Nabarangpur',
      'Puri',
      'Dhenkanal',
      'Bhadrak',
      'Khurda',
      'Ganjam'
    ]
  },
  {
    state: 'Punjab',
    cities: [
      'Chandigarh',
      'Amritsar',
      'Ludhiana',
      'Jalandhar',
      'Patiala',
      'Mohali',
      'Bathinda',
      'Hoshiarpur',
      'Rupnagar',
      'Fatehgarh Sahib',
      'Sangrur',
      'Moga',
      'Faridkot',
      'Ferozepur'
    ]
  },
  {
    state: 'Rajasthan',
    cities: [
      'Jaipur',
      'Udaipur',
      'Jodhpur',
      'Ajmer',
      'Bikaner',
      'Alwar',
      'Tonk',
      'Sikar',
      'Churu',
      'Nagaur',
      'Barmer',
      'Dausa',
      'Jaisalmer',
      'Pali',
      'Jhunjhunu'
    ]
  },
  {
    state: 'Sikkim',
    cities: [
      'Gangtok',
      'Namchi',
      'Mangan',
      'Gyalshing',
      'Rangpo'
    ]
  },
  {
    state: 'Tamil Nadu',
    cities: [
      'Chennai',
      'Coimbatore',
      'Madurai',
      'Tiruchirappalli',
      'Salem',
      'Tirunelveli',
      'Vellore',
      'Erode',
      'Thanjavur',
      'Karur',
      'Kanyakumari',
      'Dindigul',
      'Nagercoil',
      'Pollachi',
      'Ramanathapuram',
      'Pudukkottai',
      'Aruppukkottai'
    ]
  },
  {
    state: 'Telangana',
    cities: [
      'Hyderabad',
      'Warangal',
      'Nizamabad',
      'Karimnagar',
      'Khammam',
      'Mahbubnagar',
      'Adilabad',
      'Rangareddy',
      'Medak',
      'Nalgonda',
      'Suryapet',
      'Jagtiyal',
      'Jagtial'
    ]
  },
  {
    state: 'Tripura',
    cities: [
      'Agartala',
      'Ambassa',
      'Dharmanagar',
      'Kailashahar',
      'Belonia',
      'Sabroom',
      'Udaipur',
      'Khowai',
      'Teliamura',
      'Radhakishorepur'
    ]
  },
  {
    state: 'Uttar Pradesh',
    cities: [
      'Lucknow',
      'Kanpur',
      'Agra',
      'Varanasi',
      'Meerut',
      'Bareilly',
      'Ghaziabad',
      'Aligarh',
      'Jhansi',
      'Moradabad',
      'Firozabad',
      'Saharanpur',
      'Deoria',
      'Bijnor',
      'Rampur',
      'Muzaffarnagar',
      'Sitapur',
      'Shahjahanpur',
      'Budaun'
    ]
  },
  {
    state: 'Uttarakhand',
    cities: [
      'Dehradun',
      'Haridwar',
      'Rishikesh',
      'Nainital',
      'Roorkee',
      'Haldwani',
      'Kashipur',
      'Tanakpur',
      'Pithoragarh',
      'Champawat',
      'Tehri Garhwal',
      'Udham Singh Nagar'
    ]
  },
  {
    state: 'West Bengal',
    cities: [
      'Kolkata',
      'Howrah',
      'Siliguri',
      'Durgapur',
      'Asansol',
      'Bardhaman',
      'Malda',
      'Kalyani',
      'Berhampore',
      'Bishnupur',
      'Kalyan',
      'Krishnanagar',
      'Haldia',
      'Raiganj',
      'Bongaon',
      'Jalpaiguri',
      'Cooch Behar'
    ]
  },
  {
    state: 'Andaman and Nicobar Islands',
    cities: [
      'Port Blair',
      'Havelock',
      'Neil Island',
      'Diglipur',
      'Baratang',
      'Long Island',
      'Rangat',
      'Campbell Bay'
    ]
  },
  {
    state: 'Chandigarh',
    cities: ['Chandigarh']
  },
  {
    state: 'Dadra and Nagar Haveli and Daman and Diu',
    cities: [
      'Silvassa',
      'Daman',
      'Diu',
      'Dadra',
      'Vapi'
    ]
  },
  {
    state: 'Lakshadweep',
    cities: [
      'Kavaratti',
      'Agatti',
      'Minicoy',
      'Amini',
      'Kadmat',
      'Kiltan',
      'Kalapeni'
    ]
  },
  {
    state: 'Delhi',
    cities: [
      'Delhi',
      'New Delhi',
      'Dwarka',
      'Narela',
      'Rohini',
      'Southeast Delhi',
      'Southwest Delhi',
      'North Delhi'
    ]
  }
]

export default statesWithCities;
