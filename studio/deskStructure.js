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
                        'shopCsaMembership'
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
                                        S.documentList()
                                            .schemaType('shopCsaMembership')
                                            .id('shopCsaMembership')
                                            .filter('_type == "shopCsaMembership"')
                                            .defaultOrdering([{field: '_updatedAt', direction: 'desc'}])
                                    )
                            ])
                    )
            ]
        );
