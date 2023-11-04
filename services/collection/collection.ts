import { Option } from '@/hooks/useCollectionNftTokens';
import axios from 'axios';
import { toWei } from 'web3-utils';

interface Item {
  id: string;
  tier?: any;
  collectionAddress: string;
  tokenId: number;
  ownerAddress: string;
  name: string;
  description: string;
  uri: string;
  image: string;
  imageUrl: string;
  videoUrl?: string;
  price: string;
  mintedAt: string;
  timestamp?: any;
  viewCount: number;
  weeklyViewCount: number;
  weeklyTopSale?: string;
  weeklyTopSalePayment?: string;
  likeCount?: number;
  available: boolean;
  metadata: Metadata;
  covenantValue: string;
  covenantDate: string;
  walletHidden: boolean;
  currentBlockNumber: number;
  walletAddress?: any;
  isTicket: boolean;
  collection: Collection;
  profile: Profile2;
  orderList: OrderList[];
  offerList: OfferList[];
  refundList: any[];
  lastOrder: LastOrder;
  createdAt: string;
  updatedAt: string;
  revealStatus: string;
  amount: string;
  payment: string;
  offerCount: number;
  status: string;
}

interface LastOrder {
  id: string;
  collectionAddress: string;
  tokenId: number;
  round: number;
  orderId: number;
  orderIndex: number;
  type: string;
  status: string;
  typeStatus: string;
  totalSoldAmount?: number;
  orderAmount: number;
  payment: string;
  price: string;
  timestamp: string;
  startAt: string;
  endAt?: string;
  completedAt?: string;
  finalPayment?: string;
  finalPrice?: string;
  hidden: boolean;
  creator: string;
  seller: string;
  orderFrom: string;
  orderTo?: string;
  refundNoti?: any;
  salesRound: number;
  beforeRevealTokenId?: any;
  marketAbiAddress: string;
  orderAbiAddress: string;
  biddingList: (
    | BiddingList
    | BiddingList3
    | BiddingList4
    | BiddingList6
    | BiddingList7
  )[];
  fromProfile: Profile;
  createdAt: string;
  updatedAt: string;
  bidderCount: number;
  toProfile?: Profile2;
  lastBidding?: BiddingList7;
  priceIncreaseRate?: string;
}

interface OfferList {
  id: string;
  collectionAddress: string;
  tokenId: number;
  round: number;
  orderId: number;
  orderIndex: number;
  type: string;
  status: string;
  typeStatus: string;
  totalSoldAmount: number;
  orderAmount: number;
  payment: string;
  price: string;
  timestamp: string;
  startAt: string;
  endAt: string;
  completedAt?: any;
  finalPayment?: any;
  finalPrice?: any;
  hidden: boolean;
  creator: string;
  seller: string;
  orderFrom: string;
  orderTo: string;
  refundNoti?: any;
  salesRound: number;
  beforeRevealTokenId?: any;
  marketAbiAddress: string;
  orderAbiAddress: string;
  biddingList: any[];
  fromProfile: Profile;
  toProfile: Profile5;
  createdAt: string;
  updatedAt: string;
  bidderCount: number;
}

interface OrderList {
  id: string;
  collectionAddress: string;
  tokenId: number;
  round: number;
  orderId: number;
  orderIndex: number;
  type: string;
  status: string;
  typeStatus: string;
  totalSoldAmount?: (null | number)[];
  orderAmount: number;
  payment: string;
  price: string;
  timestamp: string;
  startAt: string;
  endAt?: string | string;
  completedAt?: string | string;
  finalPayment?: string | string;
  finalPrice?: string | string;
  hidden: boolean;
  creator: string;
  seller: string;
  orderFrom: string;
  orderTo?: string | string;
  refundNoti?: any;
  salesRound: number;
  beforeRevealTokenId?: any;
  marketAbiAddress: string;
  orderAbiAddress: string;
  biddingList: (
    | BiddingList
    | BiddingList
    | BiddingList3
    | BiddingList4
    | BiddingList4
    | BiddingList6
    | BiddingList7
    | BiddingList7
    | BiddingList9
  )[];
  fromProfile: FromProfile;
  createdAt: string;
  updatedAt: string;
  bidderCount: number;
  toProfile?: ToProfile;
  lastBidding?: LastBidding;
  priceIncreaseRate?: string;
}

interface LastBidding {
  id: string;
  tokenOrderId: string;
  address: string;
  orderIndex: number;
  payment: string;
  price: string;
  timestamp: string;
  status: string;
  received: boolean;
  receivedAt: string;
  profile: ToProfile;
  createdAt: string;
  updatedAt: string;
}

interface ToProfile {
  id: string;
  address: string;
  nickname?: null | string | string;
  img?: string;
  imageUrl?: string;
  themeIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface FromProfile {
  id: string;
  address: string;
  nickname: string;
  img?: (null | string)[];
  imageUrl?: (null | string)[];
  themeIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface BiddingList9 {
  id: string;
  tokenOrderId: string;
  address: string;
  orderIndex: number;
  payment: string;
  price: string;
  timestamp: string;
  status: string;
  received: boolean;
  receivedAt: string;
  profile: Profile7;
  createdAt: string;
  updatedAt: string;
}

interface Profile7 {
  id: string;
  address: string;
  nickname?: (null | string)[];
  img?: (null | string)[];
  imageUrl?: (null | string)[];
  themeIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface BiddingList7 {
  id: string;
  tokenOrderId: string;
  address: string;
  orderIndex: number;
  payment: string;
  price: string;
  timestamp: string;
  status: string;
  received: boolean;
  receivedAt: string;
  profile: Profile2;
  createdAt: string;
  updatedAt: string;
}

interface BiddingList6 {
  id: string;
  tokenOrderId: string;
  address: string;
  orderIndex: number;
  payment: string;
  price: string;
  timestamp: string;
  status: string;
  received: boolean;
  receivedAt: string;
  profile: Profile6;
  createdAt: string;
  updatedAt: string;
}

interface Profile6 {
  id: string;
  address: string;
  nickname: string;
  img?: string;
  imageUrl?: string;
  themeIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface BiddingList4 {
  id: string;
  tokenOrderId: string;
  address: string;
  orderIndex: number;
  payment: string;
  price: string;
  timestamp: string;
  status: string;
  received: boolean;
  receivedAt: string;
  profile: Profile5;
  createdAt: string;
  updatedAt: string;
}

interface Profile5 {
  id: string;
  address: string;
  nickname: string;
  img: string;
  imageUrl: string;
  themeIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface BiddingList3 {
  id: string;
  tokenOrderId: string;
  address: string;
  orderIndex: number;
  payment: string;
  price: string;
  timestamp: string;
  status: string;
  received: boolean;
  receivedAt: string;
  profile: Profile4;
  createdAt: string;
  updatedAt: string;
}

interface Profile4 {
  id: string;
  address: string;
  nickname?: any;
  img?: any;
  imageUrl?: any;
  themeIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface BiddingList {
  id: string;
  tokenOrderId: string;
  address: string;
  orderIndex: number;
  payment: string;
  price: string;
  timestamp: string;
  status: string;
  received: boolean;
  receivedAt: string;
  profile: Profile3;
  createdAt: string;
  updatedAt: string;
}

interface Profile3 {
  id: string;
  address: string;
  nickname?: string;
  img?: any;
  imageUrl?: any;
  themeIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface Profile2 {
  id: string;
  address: string;
  nickname?: string;
  img?: string;
  imageUrl?: string;
  themeIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface Collection {
  id: string;
  address: string;
  ownerAddress: string;
  ownerName: string;
  name: string;
  slug: string;
  baseUri: string;
  blockNumber: string;
  txHash: string;
  timestamp: string;
  genesisAddress: number;
  registeredAt?: any;
  registeredAtV1: string;
  registeredAtV2: string;
  viewCount: number;
  likeCount: number;
  imported: boolean;
  platformFee: number;
  featuredFee: number;
  genesisHolderFee: number;
  genesisType: number;
  imageUrl: string;
  bannerImageUrl: string;
  featuredImageUrl: string;
  logoImageUrl: string;
  isNeith: boolean;
  canReveal?: any;
  isDisplaying: boolean;
  totalNfts: number;
  covenantDate: string;
  releaseDate: string;
  listedNfts: number;
  floorPrice: number;
  totalVolume: number;
  covenantValue: string;
  rankWeeklyVolume: string;
  weeklyVolume: string;
  prevDailyVolume?: any;
  dailyVolume?: any;
  papyrusLink: string;
  discordLink?: any;
  salesRound: number;
  canSwap: boolean;
  projectSlug: string;
  mintType: string;
  backgroundColor: string;
  cardName?: any;
  isTicket: boolean;
  ticketStartAt?: any;
  ticketEndAt?: any;
  salesStartAt?: any;
  salesEndAt?: any;
  profile: Profile;
  createdAt: string;
  updatedAt: string;
  ercType: string;
  status?: any;
}

interface Profile {
  id: string;
  address: string;
  nickname: string;
  img?: any;
  imageUrl?: any;
  themeIndex: number;
  createdAt: string;
  updatedAt: string;
}

interface Metadata {
  id: number;
  name: Name[];
  description: Name[];
  image: string;
  attributes: Attribute[];
  video?: string;
}

interface Attribute {
  type: string;
  value: string[];
}

interface Name {
  language: string;
  value: string;
}

export type GetCollectionNftTokensParams = Partial<Option>;

export async function getCollectionNftTokens(
  options: GetCollectionNftTokensParams
) {
  const { data } = await axios.get(
    'https://api.nile.io/nft/collections/tokens',
    {
      params: {
        slug: options.slug ?? 'COOS',
        ...(options.fromPrice && {
          fromPrice: toWei(String(options.fromPrice)),
        }),
        ...(options.toPrice && { toPrice: toWei(String(options.toPrice)) }),
        'orderStatuses[]': options['orderStatuses[]'],
        page: options.page ? String(options.page) : '1',
        sort: options.sort ?? 'recentlyActive',
      },
    }
  );

  const items = data.data.items as Item[];

  const refinedItems = items.map(({ image, name, amount, status }) => ({
    image,
    name,
    amount,
    status,
  }));

  return refinedItems;
}
