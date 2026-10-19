/**
 * MEB01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "MEB01",
  "fullName": "Mohawk Craft Dispensary Weed Delivery",
  "street": "2655 Eglinton Ave E",
  "city": "Toronto",
  "region": "ON",
  "postal": "M1K 2S2",
  "phoneDisplay": "(437) 524-9335",
  "phoneTel": "tel:+14375249335",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJ72HKdwDP1IkRpzJT2Bw-SUY",
  "placeId": "ChIJ72HKdwDP1IkRpzJT2Bw-SUY",
  "neighbourhood": "Eglinton East / Scarborough / Brimley",
  "intersection": "",
  "transit": "",
  "visitPath": "/visit"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
