import {GiBarn} from 'react-icons/gi';
import S from '@sanity/desk-tool/structure-builder';
import {GiBasket} from 'react-icons/all';

export default () =>
    S.list()
        .title('Heirloom Farm Content')
        .items(
            [
                S.listItem()
                    .title('Home Page')
                    .icon(GiBarn)
                    .child(
                        S.document()
                            .schemaType('pageHome')
                            .documentId('pageHome')
                    ),
                ...S.documentTypeListItems().filter((item) =>
                    ![
                        'pageHome',
                        'shopCsaMembership',
                        'shopProducts'
                    ].includes(item.getId())),
                S.listItem()
                    .title('Shop')
                    .icon(GiBasket)
                    .child(
                        S.list()
                            .title('Shop Items')
                            .showIcons(false)
                            .items([
                                S.listItem()
                                    .title('Memberships')
                                    .child(
                                        S.document()
                                            .schemaType('shopCsaMembership')
                                            .documentId('shopCsaMembership')
                                    ),
                                S.listItem()
                                    .title('Products')
                                    .child(
                                        S.documentList()
                                            .schemaType('shopProducts')
                                            .id('shopProducts')
                                            .filter('_type == "shopProducts"')
                                            .defaultOrdering([{field: 'shopProductsTitle', direction: 'desc'}])
                                    )
                            ])
                    )
            ]
        );
