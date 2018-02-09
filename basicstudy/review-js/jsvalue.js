var CompetitorAttributeManager = function () {
    var t = new Datatable,
      e = function () {
        t.init({
            src: $('#competitor_attribute_tb_container'),
            checkboxAllElement: $('#competitor_attribute_chk_all'),
            filterElement: $('#competitor_attribute_filter'),
            onSuccess: function (t, e) {},
            onError: function (t) {},
            onDataLoad: function (t) {},
            onFilterResetLoad: function (t) {$('#comAttrManType').select2('val', ''), $('#competitor_attribute_filter select[name="status"]').select2('val', ''), $('#comAttrManTypeChild-div').hide()},
            dataTable: {
                bStateSave: !1,
                lengthMenu: [[15, 20, 50, 100, 150], [15, 20, 50, 100, 150]],
                pageLength: 15,
                scrollY: '500px',
                scrollX: !0,
                columns: [{
                    data: 'competitorAttributeId',
                    render: function (t, e, n, a) {return '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline"><input type="checkbox" class="checkboxes" value="' + t + '"/><span></span></label>'}
                }, {
                    data: 'competitorAttributeId', render: function (t, e, n, a) {
                        var o = i18n.t('onInactive')
                        return 1 == n.status && (o = i18n.t('offInactive')), '<a href="javascript:CompetitorAttributeManager.ChangeStatus(' + t + ',' + n.status + ');" class="btn auth-check red">' + o + '</a>'
                    }
                }, {data: 'type', sDefaultContent: ''}, {data: 'name', sDefaultContent: ''}, {
                    data: 'status',
                    render: function (t, e, n, a) {return '1' == t ? i18n.t('onInactive') : i18n.t('offInactive')}
                }, {data: 'sort', sDefaultContent: ''}, {data: 'createdBy', sDefaultContent: ''}, {
                    data: 'createdTime',
                    sDefaultContent: ''
                }, {data: 'updatedBy', sDefaultContent: ''}, {data: 'updatedTime', sDefaultContent: ''}],
                ajax: {url: '/CompetitorAttributeList'},
                columnDefs: [{orderable: !1, targets: [0, 1, 2, 3, 4, 6, 8], searchable: !1}],
                order: [[7, 'desc']]
            }
        }), $('#competitor_attribute_export_').click(function () {
            return $.fileDownload($('#competitor_attribute_filter_form').attr('action'), {
                httpMethod: 'POST',
                data: $('#competitor_attribute_filter_form').serializeArray(),
                token: $('#competitor_attribute_filter_form input[name=token]').val(),
                successCallback: function () {},
                processCallback: function (t) {App.progressBar(t)},
                transportCallback: function () {App.transportMsg(i18n.t('file_transport_download'))},
                failCallback: function () {
                    swal({
                        title: i18n.t('swal_title_warning'),
                        text: i18n.t('operation_failed'),
                        confirmButtonText: '<i class="fa fa-check"></i> Ok',
                        confirmButtonClass: 'btn btn-circle btn-success',
                        buttonsStyling: !1
                    }).done()
                }
            }), !1
        }), $('#competitor_attribute__add__').click(function () {
            App.blockUI({
                message: 'Loading...',
                target: t.gettableContainer(),
                overlayColor: 'none',
                cenrerY: !0,
                boxed: !0
            })
            var e = $('#ajax-modal')
            e.load('/CompetitorAttributeAddView', '', function () {e.modal(), App.unblockUI(t.gettableContainer())})
        }), $('#competitor_attribute__delete__').click(function () {
            if (0 === t.getSelectedRowsCount()) return void swal({
                title: i18n.t('swal_title_warning'),
                text: i18n.t('warning_select_record'),
                confirmButtonText: '<i class="fa fa-check"></i> Ok',
                confirmButtonClass: 'btn btn-circle btn-success',
                buttonsStyling: !1
            }).done()
            swal({
                title: i18n.t('confirm_title_delete_records'),
                text: i18n.t('confirm_txt_delete_records'),
                type: 'warning',
                showCancelButton: !0,
                confirmButtonText: '<i class="fa fa-trash"></i> Delete',
                confirmButtonClass: 'btn btn-circle btn-success',
                cancelButtonText: '<i class="fa fa-close"></i> No',
                cancelButtonClass: 'btn btn-sm btn-danger',
                buttonsStyling: !1
            }).then(function (e) {
                e && (App.blockUI({
                    message: 'Loading...',
                    target: t.gettableContainer(),
                    overlayColor: 'none',
                    cenrerY: !0,
                    boxed: !0
                }), $.ajax({
                    url: '/CompetitorAttributeDelete',
                    type: 'post',
                    data: {params: t.getSelectedRows()},
                    dataType: 'json',
                    success: function (e) {
                        t.getDataTable().ajax.reload(), swal({
                            title: i18n.t('confirm_title_success'),
                            text: i18n.t('confirm_txt_delete_success'),
                            confirmButtonText: '<i class="fa fa-check"></i> Ok',
                            confirmButtonClass: 'btn btn-circle btn-success',
                            buttonsStyling: !1
                        }).done()
                    },
                    error: function (e) {
                        swal({
                            title: i18n.t('swal_title_warning'),
                            text: i18n.t(e.responseText),
                            confirmButtonText: '<i class="fa fa-check"></i> Ok',
                            confirmButtonClass: 'btn btn-circle btn-success',
                            buttonsStyling: !1
                        }).done(), App.unblockUI(t.gettableContainer())
                    }
                }))
            }).done()
        }), $('#competitor_attribute_update_').click(function () {
            if (0 === t.getSelectedRowsCount()) return swal({
                title: i18n.t('swal_title_warning'),
                text: i18n.t('warning_select_record'),
                confirmButtonText: '<i class="fa fa-check"></i> Ok',
                confirmButtonClass: 'btn btn-circle btn-success',
                buttonsStyling: !1
            }).done(), !1
            if (t.getSelectedRowsCount() > 1) return swal({
                title: i18n.t('swal_title_warning'),
                text: i18n.t('warning_could_select_one'),
                confirmButtonText: '<i class="fa fa-check"></i> Ok',
                confirmButtonClass: 'btn btn-circle btn-success',
                buttonsStyling: !1
            }).done(), !1
            App.blockUI({
                message: 'Loading...',
                target: t.gettableContainer(),
                overlayColor: 'none',
                cenrerY: !0,
                boxed: !0
            })
            var e = $('#ajax-modal')
            e.load('/CompetitorAttributeGet/' + t.getSelectedRows(), '', function () {e.modal(), App.unblockUI(t.gettableContainer())})
        }), $('#competitor_attribute_refresh_').click(function () {t.getDataTable().ajax.reload()})
    },
      n = function (e, n) {
        n = 0 == n ? 1 : 0, swal({
            title: i18n.t('confirm_title_delete_records'),
            text: i18n.t('change_the_status_of_this_record'),
            type: 'warning',
            showCancelButton: !0,
            confirmButtonText: '<i class="fa fa-trash"></i> Yes',
            confirmButtonClass: 'btn btn-circle btn-success',
            cancelButtonText: '<i class="fa fa-close"></i> No',
            cancelButtonClass: 'btn btn-circle btn-sm btn-danger',
            buttonsStyling: !1
        }).then(function (a) {
            a && (App.blockUI({
                message: 'Loading...',
                target: t.gettableContainer(),
                overlayColor: 'none',
                cenrerY: !0,
                boxed: !0
            }), $.ajax({
                url: '/CompetitorAttributeEdit',
                type: 'post',
                data: {competitorAttributeId: e, status: n},
                dataType: 'json',
                success: function (e) {
                    t.getDataTable().ajax.reload(), swal({
                        title: i18n.t('confirm_title_success'),
                        text: i18n.t('change_success'),
                        confirmButtonText: '<i class="fa fa-check"></i> Ok',
                        confirmButtonClass: 'btn btn-circle btn-success',
                        buttonsStyling: !1
                    }).done()
                },
                error: function (e) {
                    swal({
                        title: i18n.t('swal_title_warning'),
                        text: i18n.t(e.responseText),
                        confirmButtonText: '<i class="fa fa-check"></i> Ok',
                        confirmButtonClass: 'btn btn-circle btn-success',
                        buttonsStyling: !1
                    }).done(), App.unblockUI(t.gettableContainer())
                }
            }))
        }).done()
    },
      a = function () {t.getDataTable().ajax.reload()},
      o = function () {
        $('#comAttrManType').on('change', function () {
            var t = $('#comAttrManType').find('option:selected').text()
            $('#comAttrManTypeChild-name').text(t), $('#competitor_attribute_filter_form input[name=\'parentId\']').val($(this).val()), '' != $(this).val() ? $.get('/phoneTypeChildrenList/' + $(this).val(), function (t) {
                if (0 === t.length) $('#comAttrManTypeChild-div').hide() else {
                    var e = '<option value="">所有</option>'
                    $.each(t, function (t, n) {e += '<option value="' + n.competitorAttributeId + '">' + n.name + '</option>'}), $('#comAttrManTypeChild').html(e).selectpicker('refresh'), $('#comAttrManTypeChild-div').show()
                }
            }) : $('#comAttrManTypeChild-div').hide()
        }), $('#comAttrManTypeChild').on('change', function () {$('#competitor_attribute_filter_form input[name=\'parentId\']').val($(this).val())})
    }
    return {
        init: function () {e(), o()},
        ChangeStatus: function (t, e) {n(t, e)},
        refresh: function () {a()}
    }
}()
jQuery(document).ready(function () {
    CompetitorAttributeManager.init(),
      $('#competitor_attribute__find__').click(function () {$('#competitor_attribute_filter').toggle(500)}),
      $('.date-picker').datepicker({
        rtl: App.isRTL(),
        autoclose: !0
    })
})