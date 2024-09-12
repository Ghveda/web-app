import { Fragment } from 'react';
import {
  SfButton,
  SfIconChevronLeft,
  SfIconChevronRight,
  usePagination,
} from '@storefront-ui/react';
import classNames from 'classnames';
import { useTranslation } from '@/app/i18n/client';
import { useParams } from 'next/navigation';

type Params = {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  maxPages: number;
  setCurrentPage: (num: number) => void;
};

export function Pagination({
  totalItems,
  currentPage,
  pageSize,
  maxPages,
  setCurrentPage,
}: Params) {
  const {
    totalPages,
    pages,
    selectedPage,
    startPage,
    endPage,
    next,
    prev,
    setPage,
    maxVisiblePages,
  } = usePagination({
    totalItems,
    currentPage,
    pageSize,
    maxPages,
  });

  const { locale } = useParams<{ locale: string }>();
  const { t } = useTranslation(locale, 'translations');

  const handlePageChange = (page: number) => {
    setPage(page);
    setCurrentPage(page);
  };

  return (
    <nav
      className="flex items-end justify-between border-t border-neutral-200"
      role="navigation"
      aria-label="pagination"
    >
      <SfButton
        size="lg"
        className="gap-3 !px-3 !text-primary-100 sm:px-6"
        aria-label="Go to previous page"
        disabled={selectedPage <= 1}
        variant="tertiary"
        slotPrefix={<SfIconChevronLeft />}
        onClick={() => prev()}
      >
        <span className="hidden sm:inline-flex">{t('common.previous')}</span>
      </SfButton>
      <ul className="flex justify-center">
        {!pages.includes(1) && (
          <li>
            <div
              className={classNames('flex border-t-4 border-transparent pt-1', {
                'border-t-4 !border-primary-100 font-medium':
                  selectedPage === 1,
              })}
            >
              <button
                type="button"
                className="min-w-[38px] rounded-md px-3 py-3 text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 sm:px-4 md:w-12"
                aria-current={selectedPage === 1}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
            </div>
          </li>
        )}
        {startPage > 2 && (
          <li>
            <div className="flex border-t-4 border-transparent">
              <button
                type="button"
                disabled
                aria-hidden="true"
                className="rounded-md px-3 py-3 text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 sm:px-4 md:w-12 "
              >
                ...
              </button>
            </div>
          </li>
        )}
        {pages.map((page: number) => (
          <Fragment key={page}>
            {maxVisiblePages === 1 && selectedPage === totalPages && (
              <li>
                <div className="flex border-t-4 border-transparent pt-1">
                  <button
                    type="button"
                    className="min-w-[38px] rounded-md px-3 py-3 text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 sm:px-4 md:w-12 "
                    aria-current={endPage - 1 === selectedPage}
                    onClick={() => handlePageChange(endPage - 1)}
                  >
                    {endPage - 1}
                  </button>
                </div>
              </li>
            )}
            <li>
              <div
                className={classNames(
                  'flex border-t-4 border-transparent pt-1',
                  {
                    'border-t-4 !border-primary-100 font-medium':
                      selectedPage === page,
                  },
                )}
              >
                <button
                  type="button"
                  className={classNames(
                    'min-w-[38px] rounded-md px-3 py-3 text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 sm:px-4 md:w-12',
                    {
                      '!text-neutral-900 hover:!text-primary-800 active:!text-primary-900':
                        selectedPage === page,
                    },
                  )}
                  aria-label={`Page ${page} of ${totalPages}`}
                  aria-current={selectedPage === page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              </div>
            </li>
            {maxVisiblePages === 1 && selectedPage === 1 && (
              <li>
                <div className="flex border-t-4 border-transparent pt-1">
                  <button
                    type="button"
                    className="min-w-[38px] rounded-md px-3 py-3 text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 sm:px-4 md:w-12 "
                    aria-current={selectedPage === 1}
                    onClick={() => handlePageChange(2)}
                  >
                    2
                  </button>
                </div>
              </li>
            )}
          </Fragment>
        ))}
        {endPage < totalPages - 1 && (
          <li>
            <div className="flex border-t-4 border-transparent pt-1">
              <button
                type="button"
                disabled
                aria-hidden="true"
                className="rounded-md px-3 py-3 text-neutral-500 sm:px-4 "
              >
                ...
              </button>
            </div>
          </li>
        )}
        {!pages.includes(totalPages) && (
          <li>
            <div
              className={classNames('flex border-t-4 border-transparent pt-1', {
                'border-t-4 !border-primary-100 font-medium':
                  selectedPage === totalPages,
              })}
            >
              <button
                type="button"
                className="min-w-[38px] rounded-md px-3 py-3 text-neutral-500 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 sm:px-4 md:w-12 "
                aria-current={totalPages === selectedPage}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </div>
          </li>
        )}
      </ul>
      <SfButton
        size="lg"
        aria-label="Go to next page"
        disabled={selectedPage >= totalPages}
        variant="tertiary"
        slotSuffix={<SfIconChevronRight />}
        className="gap-3 !px-3 !text-primary-100 sm:px-6"
        onClick={() => next()}
      >
        <span className="hidden sm:inline-flex">{t('common.next')}</span>
      </SfButton>
    </nav>
  );
}
