"""empty message

Revision ID: e60158512e94
Revises: 6389d6fc0a76
Create Date: 2022-07-31 11:58:59.566236

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e60158512e94'
down_revision = '6389d6fc0a76'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('meeting', 'latitude',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=80),
               existing_nullable=True)
    op.alter_column('meeting', 'longitude',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=80),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('meeting', 'longitude',
               existing_type=sa.String(length=80),
               type_=sa.INTEGER(),
               existing_nullable=True)
    op.alter_column('meeting', 'latitude',
               existing_type=sa.String(length=80),
               type_=sa.INTEGER(),
               existing_nullable=True)
    # ### end Alembic commands ###
